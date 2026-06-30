import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const scanTargets = [
  {
    label: "BG prerendered HTML",
    dir: path.join(projectRoot, "dist", "bg"),
    extensions: [".html"],
  },
  {
    label: "BG i18n content",
    dir: path.join(projectRoot, "data", "i18n", "content", "bg"),
    extensions: [".ts"],
  },
];

const mojibakeMarkers = [
  "Ã",
  "Ã‘",
  "Ãƒ",
  "Ãâ€¢",
  "ÃÅ¡",
  "ÃÂ",
  "ÃÂ°",
  "ÃÂ¸",
  "ÃÂµ",
  "Ã‘â€š",
  "Ã‘â‚¬",
  "Ã‘Â",
  "Ã",
  "Â",
  "â€",
  "â€™",
  "â€œ",
  "â€",
  "â€“",
  "â€”",
  "ï¿½",
  "\uFFFD",
];

const walkFiles = (dir, extensions, results = []) => {
  if (!fs.existsSync(dir)) {
    return results;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(entryPath, extensions, results);
      continue;
    }

    if (extensions.includes(path.extname(entry.name))) {
      results.push(entryPath);
    }
  }

  return results.sort((a, b) => a.localeCompare(b));
};

const relativePath = (targetPath) => path.relative(projectRoot, targetPath).replace(/\\/g, "/");

const createSnippet = (content, index, marker) => {
  const start = Math.max(0, index - 45);
  const end = Math.min(content.length, index + marker.length + 45);

  return content
    .slice(start, end)
    .replace(/\s+/g, " ")
    .trim();
};

const failures = [];
let scannedFileCount = 0;

for (const target of scanTargets) {
  if (!fs.existsSync(target.dir)) {
    failures.push(`${target.label} directory does not exist: ${relativePath(target.dir)}`);
    continue;
  }

  const files = walkFiles(target.dir, target.extensions);
  scannedFileCount += files.length;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    for (const marker of mojibakeMarkers) {
      const markerIndex = content.indexOf(marker);

      if (markerIndex !== -1) {
        failures.push(
          `${relativePath(file)} contains mojibake marker "${marker}" near: ${createSnippet(
            content,
            markerIndex,
            marker
          )}`
        );
      }
    }
  }
}

if (failures.length > 0) {
  console.error("Cyrillic encoding safety guard failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Cyrillic encoding safety guard passed.");
console.log(`- scanned files: ${scannedFileCount}`);
console.log("- dist/bg HTML: scanned");
console.log("- BG i18n content TS: scanned");
console.log("- mojibake markers: absent");
