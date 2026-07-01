import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const excludedDirectoryNames = new Set(["node_modules", ".git"]);
const excludedRelativeDirectoryPrefixes = ["dist/server", "dist/assets"];

const createMarker = (codePoints) => String.fromCodePoint(...codePoints);

const markerDefinitions = [
  { label: "UTF-8 Cyrillic mojibake prefix A", codePoints: [0x00c3, 0x0090] },
  { label: "UTF-8 Cyrillic mojibake prefix B", codePoints: [0x00c3, 0x0091] },
  { label: "UTF-8 mojibake Â marker", codePoints: [0x00c3, 0x0082] },
  { label: "replacement marker", codePoints: [0x00ef, 0x00bf, 0x00bd] },
  { label: "unicode replacement character", codePoints: [0xfffd] },
  { label: "double-encoded mojibake prefix A", codePoints: [0x00c3, 0x0192, 0x00c2, 0x0090] },
  { label: "double-encoded mojibake prefix B", codePoints: [0x00c3, 0x0192, 0x00e2, 0x20ac, 0x02dc] },
  { label: "mojibake dash/apostrophe prefix", codePoints: [0x00c3, 0x00a2, 0x00e2, 0x201a, 0x00ac] },
  { label: "broken Windows-1251 sequence A", codePoints: [0x00d0, 0x00a0, 0x00d1, 0x0178] },
  { label: "broken Windows-1251 sequence B", codePoints: [0x00d0, 0x00a0, 0x00d1, 0x0153] },
  { label: "broken Windows-1251 sequence C", codePoints: [0x00d0, 0x00a0, 0x00c2, 0x00b5] },
  { label: "broken Windows-1251 sequence D", codePoints: [0x00d0, 0x00a0, 0x00c2, 0x00b0] },
  { label: "broken Windows-1251 sequence E", codePoints: [0x00d0, 0x00a1, 0x00d0, 0x2030] },
  { label: "broken Windows-1251 sequence F", codePoints: [0x00d0, 0x00a1, 0x00d0, 0x0160] },
  { label: "combined Cyrillic mojibake A", codePoints: [0x00c3, 0x0090, 0x00c5, 0xb8] },
  { label: "combined Cyrillic mojibake B", codePoints: [0x00c3, 0x0090, 0x00c2, 0x00b5] },
  { label: "combined Cyrillic mojibake C", codePoints: [0x00c3, 0x0090, 0x00c2, 0x00bb] },
  { label: "combined Cyrillic mojibake D", codePoints: [0x00c3, 0x0090, 0x00c2, 0x00b0] },
  { label: "combined Cyrillic mojibake E", codePoints: [0x00c3, 0x0090, 0x00c2, 0x00bd] },
  { label: "combined Cyrillic mojibake F", codePoints: [0x00c3, 0x0091, 0x00e2, 0x20ac, 0x0161] },
  { label: "combined Cyrillic mojibake G", codePoints: [0x00c3, 0x0091, 0x00e2, 0x201a, 0x00ac] },
  { label: "combined Cyrillic mojibake H", codePoints: [0x00c3, 0x0091, 0x00c6, 0x2019] },
  { label: "combined Cyrillic mojibake I", codePoints: [0x00c3, 0x0091, 0x00c2, 0x0081] },
  { label: "broken Cyrillic sequence G", codePoints: [0x00d0, 0x00a0, 0x00c2, 0x00bb] },
  { label: "broken Cyrillic sequence H", codePoints: [0x00d0, 0x00a1, 0x00d0, 0x0192] },
  { label: "broken Cyrillic sequence I", codePoints: [0x00d0, 0x00a1, 0x00e2, 0x20ac, 0x0161] },
  { label: "broken Cyrillic sequence J", codePoints: [0x00d0, 0x00a1, 0x00d0, 0x201a] },
].map((definition) => ({
  label: definition.label,
  value: createMarker(definition.codePoints),
}));

const scanTargets = [
  {
    label: "BG prerendered HTML",
    dir: path.join(projectRoot, "dist", "bg"),
    extensions: [".html"],
    required: true,
  },
  {
    label: "EN prerendered HTML",
    dir: path.join(projectRoot, "dist", "en"),
    extensions: [".html"],
    required: true,
  },
  {
    label: "BG i18n content",
    dir: path.join(projectRoot, "data", "i18n", "content", "bg"),
    extensions: [".ts"],
    required: true,
  },
  {
    label: "EN i18n content",
    dir: path.join(projectRoot, "data", "i18n", "content", "en"),
    extensions: [".ts"],
    required: true,
  },
  {
    label: "Pages source",
    dir: path.join(projectRoot, "pages"),
    extensions: [".tsx"],
    required: true,
  },
  {
    label: "Components source",
    dir: path.join(projectRoot, "components"),
    extensions: [".tsx"],
    required: true,
  },
  {
    label: "Data source",
    dir: path.join(projectRoot, "data"),
    extensions: [".ts"],
    required: true,
  },
  {
    label: "SEO source",
    dir: path.join(projectRoot, "seo"),
    extensions: [".ts"],
    required: true,
  },
  {
    label: "Scripts source",
    dir: path.join(projectRoot, "scripts"),
    extensions: [".mjs"],
    required: true,
  },
];

const relativePath = (targetPath) => path.relative(projectRoot, targetPath).replace(/\\/g, "/");

const shouldSkipDirectory = (dirPath) => {
  const entryName = path.basename(dirPath);

  if (excludedDirectoryNames.has(entryName)) {
    return true;
  }

  const relativeDir = relativePath(dirPath);
  return excludedRelativeDirectoryPrefixes.some(
    (prefix) => relativeDir === prefix || relativeDir.startsWith(`${prefix}/`)
  );
};

const walkFiles = (dir, extensions, results = []) => {
  if (!fs.existsSync(dir) || shouldSkipDirectory(dir)) {
    return results;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(entryPath, extensions, results);
      continue;
    }

    if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
      results.push(entryPath);
    }
  }

  return results.sort((a, b) => a.localeCompare(b));
};

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
    if (target.required) {
      failures.push(`${target.label} directory does not exist: ${relativePath(target.dir)}`);
    }
    continue;
  }

  const files = walkFiles(target.dir, target.extensions);
  scannedFileCount += files.length;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    for (const marker of markerDefinitions) {
      const markerIndex = content.indexOf(marker.value);

      if (markerIndex !== -1) {
        failures.push(
          `${relativePath(file)} contains mojibake marker "${marker.label}" (${marker.value}) near: ${createSnippet(
            content,
            markerIndex,
            marker.value
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
console.log("- dist/en HTML: scanned");
console.log("- BG i18n content TS: scanned");
console.log("- EN i18n content TS: scanned");
console.log("- pages TSX source: scanned");
console.log("- components TSX source: scanned");
console.log("- data TS source: scanned");
console.log("- seo TS source: scanned");
console.log("- scripts MJS source: scanned");
console.log("- mojibake markers: absent");
