import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_PRERENDER_ROUTE_COUNT = 46;
const EXPECTED_SITEMAP_URL_COUNT = 27;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const failures = [];

const fail = (message) => {
  failures.push(message);
};

const assertPathExists = (targetPath, label) => {
  if (!fs.existsSync(targetPath)) {
    fail(`${label} does not exist: ${path.relative(projectRoot, targetPath)}`);
  }
};

const assertPathMissing = (targetPath, label) => {
  if (fs.existsSync(targetPath)) {
    fail(`${label} must not exist: ${path.relative(projectRoot, targetPath)}`);
  }
};

const walkFiles = (dir, predicate, results = []) => {
  if (!fs.existsSync(dir)) {
    return results;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(entryPath, predicate, results);
      continue;
    }

    if (predicate(entryPath)) {
      results.push(entryPath);
    }
  }

  return results;
};

const relativePath = (targetPath) => path.relative(projectRoot, targetPath).replace(/\\/g, "/");

assertPathExists(distDir, "dist");
assertPathExists(sitemapPath, "sitemap.xml");
assertPathExists(path.join(distDir, "en", "index.html"), "dist/en/index.html");
assertPathExists(path.join(distDir, "en", "contact", "index.html"), "dist/en/contact/index.html");
assertPathExists(path.join(distDir, "en", "about", "index.html"), "dist/en/about/index.html");
assertPathExists(path.join(distDir, "en", "services", "index.html"), "dist/en/services/index.html");
assertPathExists(
  path.join(distDir, "en", "services", "electrical-panels", "index.html"),
  "dist/en/services/electrical-panels/index.html"
);
assertPathExists(
  path.join(distDir, "en", "services", "cable-routes", "index.html"),
  "dist/en/services/cable-routes/index.html"
);
assertPathExists(
  path.join(distDir, "en", "services", "industrial-electrical-installations", "index.html"),
  "dist/en/services/industrial-electrical-installations/index.html"
);
assertPathExists(
  path.join(distDir, "en", "services", "automation", "index.html"),
  "dist/en/services/automation/index.html"
);
assertPathExists(
  path.join(distDir, "en", "services", "low-voltage-systems", "index.html"),
  "dist/en/services/low-voltage-systems/index.html"
);
assertPathExists(
  path.join(distDir, "en", "services", "maintenance-and-service", "index.html"),
  "dist/en/services/maintenance-and-service/index.html"
);
assertPathExists(path.join(distDir, "en", "solutions", "index.html"), "dist/en/solutions/index.html");
assertPathExists(
  path.join(distDir, "en", "solutions", "new-production-site", "index.html"),
  "dist/en/solutions/new-production-site/index.html"
);
assertPathExists(
  path.join(distDir, "en", "solutions", "electrical-system-modernization", "index.html"),
  "dist/en/solutions/electrical-system-modernization/index.html"
);
assertPathExists(
  path.join(distDir, "en", "solutions", "panels-and-automation-for-production-lines", "index.html"),
  "dist/en/solutions/panels-and-automation-for-production-lines/index.html"
);
assertPathExists(
  path.join(distDir, "en", "solutions", "cable-infrastructure-for-base", "index.html"),
  "dist/en/solutions/cable-infrastructure-for-base/index.html"
);
assertPathExists(
  path.join(distDir, "en", "solutions", "service-and-expansion", "index.html"),
  "dist/en/solutions/service-and-expansion/index.html"
);
assertPathExists(
  path.join(distDir, "en", "solutions", "high-access-installation", "index.html"),
  "dist/en/solutions/high-access-installation/index.html"
);
assertPathExists(path.join(distDir, "en", "industries", "index.html"), "dist/en/industries/index.html");
assertPathMissing(path.join(distDir, "ro"), "dist/ro");

const htmlFiles = walkFiles(distDir, (filePath) => filePath.endsWith(".html"));
const rootHtmlPath = path.join(distDir, "index.html");
const prerenderedRouteHtmlFiles = htmlFiles.filter((filePath) => path.resolve(filePath) !== rootHtmlPath);
const enHtmlFiles = htmlFiles.filter((filePath) => relativePath(filePath).startsWith("dist/en/"));
const allowedEnHtmlFiles = new Set([
  "dist/en/index.html",
  "dist/en/contact/index.html",
  "dist/en/about/index.html",
  "dist/en/services/index.html",
  "dist/en/services/electrical-panels/index.html",
  "dist/en/services/cable-routes/index.html",
  "dist/en/services/industrial-electrical-installations/index.html",
  "dist/en/services/automation/index.html",
  "dist/en/services/low-voltage-systems/index.html",
  "dist/en/services/maintenance-and-service/index.html",
  "dist/en/solutions/index.html",
  "dist/en/solutions/new-production-site/index.html",
  "dist/en/solutions/electrical-system-modernization/index.html",
  "dist/en/solutions/panels-and-automation-for-production-lines/index.html",
  "dist/en/solutions/cable-infrastructure-for-base/index.html",
  "dist/en/solutions/service-and-expansion/index.html",
  "dist/en/solutions/high-access-installation/index.html",
  "dist/en/industries/index.html",
]);
const unexpectedEnHtmlFiles = enHtmlFiles
  .map(relativePath)
  .filter((filePath) => !allowedEnHtmlFiles.has(filePath));

if (enHtmlFiles.length !== allowedEnHtmlFiles.size || unexpectedEnHtmlFiles.length > 0) {
  fail(
    `Expected only approved EN overview, service detail and solution detail output, found: ${
      enHtmlFiles.map(relativePath).join(", ") || "none"
    }.`
  );
}

if (prerenderedRouteHtmlFiles.length !== EXPECTED_PRERENDER_ROUTE_COUNT) {
  fail(
    `Expected ${EXPECTED_PRERENDER_ROUTE_COUNT} prerendered route HTML files, found ${prerenderedRouteHtmlFiles.length}.`
  );
}

const htmlDisallowedPatterns = [
  { label: "hreflang", pattern: /hreflang/i },
  { label: "RO URL", pattern: /(?:https?:\/\/[^"'\s<>]+)?\/ro\//i },
];

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, "utf8");

  for (const { label, pattern } of htmlDisallowedPatterns) {
    if (pattern.test(content)) {
      fail(`${label} output found in ${relativePath(htmlFile)}.`);
    }
  }
}

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrlCount = [...sitemap.matchAll(/<loc>/g)].length;

  if (sitemapUrlCount !== EXPECTED_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_SITEMAP_URL_COUNT} sitemap URLs, found ${sitemapUrlCount}.`);
  }

  const sitemapDisallowedPatterns = [
    { label: "EN sitemap URL", pattern: /\/en\//i },
    { label: "RO sitemap URL", pattern: /\/ro\//i },
    { label: "hreflang sitemap output", pattern: /hreflang/i },
  ];

  for (const { label, pattern } of sitemapDisallowedPatterns) {
    if (pattern.test(sitemap)) {
      fail(`${label} found in sitemap.xml.`);
    }
  }
}

if (failures.length > 0) {
  console.error("I18N output safety guard failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("I18N output safety guard passed.");
console.log(`- prerendered route HTML files: ${EXPECTED_PRERENDER_ROUTE_COUNT}`);
console.log(`- sitemap URLs: ${EXPECTED_SITEMAP_URL_COUNT}`);
console.log("- EN output: approved overview, service detail and solution detail routes only");
console.log("- RO output: absent");
console.log("- hreflang: absent");
