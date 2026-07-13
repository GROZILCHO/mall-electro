import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_PRERENDER_ROUTE_COUNT = 76;
const EXPECTED_SITEMAP_URL_COUNT = 51;
const EXPECTED_EN_SITEMAP_URL_COUNT = 24;
const EXPECTED_RO_PREVIEW_ROUTE_COUNT = 24;
const SITE_URL = "https://mallelectro.com";

const approvedBgEnPairs = [
  ["/bg/", "/en/"],
  ["/bg/kontakti", "/en/contact"],
  ["/bg/za-nas", "/en/about"],
  ["/bg/uslugi", "/en/services"],
  ["/bg/reshenia", "/en/solutions"],
  ["/bg/industrii", "/en/industries"],
  ["/bg/uslugi/elektricheski-tabla", "/en/services/electrical-panels"],
  ["/bg/uslugi/kabelni-traseta", "/en/services/cable-routes"],
  ["/bg/uslugi/industrialni-elektroinstalatsii", "/en/services/industrial-electrical-installations"],
  ["/bg/uslugi/avtomatizatsia", "/en/services/automation"],
  ["/bg/uslugi/nisko-naprezhenie", "/en/services/low-voltage-systems"],
  ["/bg/uslugi/poddrazhka-i-serviz", "/en/services/maintenance-and-service"],
  ["/bg/reshenia/nov-proizvodstven-obekt", "/en/solutions/new-production-site"],
  ["/bg/reshenia/modernizatsia-na-elektro-sistema", "/en/solutions/electrical-system-modernization"],
  ["/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii", "/en/solutions/panels-and-automation-for-production-lines"],
  ["/bg/reshenia/kabelna-infrastruktura-za-baza", "/en/solutions/cable-infrastructure-for-base"],
  ["/bg/reshenia/serviz-i-razshiryavane", "/en/solutions/service-and-expansion"],
  ["/bg/reshenia/elektromontazh-na-visochina-s-vishka", "/en/solutions/high-access-installation"],
  ["/bg/industrii/agro", "/en/industries/agriculture"],
  ["/bg/industrii/hvp", "/en/industries/food-industry"],
  ["/bg/industrii/zarnoprerabotka", "/en/industries/grain-processing"],
  ["/bg/industrii/melnitsi", "/en/industries/mills"],
  ["/bg/industrii/logistika", "/en/industries/logistics"],
  ["/bg/industrii/proizvodstveni-predpriyatiya", "/en/industries/manufacturing-companies"],
];

const bgLegalRoutes = [
  "/bg/politika-za-poveritelnost",
  "/bg/politika-za-biskvitki",
  "/bg/usloviya-za-polzvane",
];

const approvedRoPreviewRoutes = [
  "/ro/",
  "/ro/servicii",
  "/ro/servicii/tablouri-electrice",
  "/ro/servicii/trasee-de-cabluri",
  "/ro/servicii/instalatii-electrice-industriale",
  "/ro/servicii/automatizare",
  "/ro/servicii/sisteme-de-joasa-tensiune",
  "/ro/servicii/mentenanta-si-service",
  "/ro/solutii",
  "/ro/solutii/unitate-noua-de-productie",
  "/ro/solutii/modernizare-sistem-electric",
  "/ro/solutii/infrastructura-de-cabluri-pentru-baza",
  "/ro/solutii/service-si-extindere",
  "/ro/solutii/instalatii-electrice-la-inaltime",
  "/ro/solutii/tablouri-si-automatizare-pentru-linii-tehnologice",
  "/ro/despre-noi",
  "/ro/industrii",
  "/ro/industrii/industria-alimentara",
  "/ro/industrii/procesarea-cerealelor",
  "/ro/industrii/mori",
  "/ro/industrii/agro",
  "/ro/industrii/logistica",
  "/ro/industrii/unitati-de-productie",
  "/ro/contact",
];

const blockedRoRoutes = [
  "/ro/politica-de-confidentialitate",
  "/ro/politica-cookie",
  "/ro/termeni-de-utilizare",
  "/ro/404",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const failures = [];

const fail = (message) => {
  failures.push(message);
};

const normalizeRoute = (routePath) => (routePath.length > 1 ? routePath.replace(/\/$/, "") : routePath);
const approvedRoRouteSet = new Set(approvedRoPreviewRoutes.map((routePath) => normalizeRoute(routePath)));
const bgLegalRouteSet = new Set(bgLegalRoutes.map((routePath) => normalizeRoute(routePath)));

const canonicalUrl = (routePath) => {
  const normalizedPath = routePath === "/" ? "/" : `${routePath.replace(/\/$/, "")}/`;
  return `${SITE_URL}${normalizedPath}`;
};

const routeToHtmlPath = (routePath) => {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  const trimmedPath = routePath.replace(/^\/|\/$/g, "");
  return path.join(distDir, ...trimmedPath.split("/"), "index.html");
};

const relativePath = (targetPath) => path.relative(projectRoot, targetPath).replace(/\\/g, "/");

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

const assertHtmlIncludes = (html, expected, label, filePath) => {
  if (!html.includes(expected)) {
    fail(`${label} missing in ${relativePath(filePath)}.`);
  }
};

const assertHtmlExcludes = (html, unexpected, label, filePath) => {
  if (html.includes(unexpected)) {
    fail(`${label} found in ${relativePath(filePath)}.`);
  }
};

assertPathExists(distDir, "dist");
assertPathExists(sitemapPath, "sitemap.xml");

const approvedEnRoutes = approvedBgEnPairs.map(([, enPath]) => enPath);
const allowedEnHtmlFiles = new Set(approvedEnRoutes.map((routePath) => relativePath(routeToHtmlPath(routePath))));
const allowedRoHtmlFiles = new Set(approvedRoPreviewRoutes.map((routePath) => relativePath(routeToHtmlPath(routePath))));

for (const [bgPath, enPath] of approvedBgEnPairs) {
  assertPathExists(routeToHtmlPath(bgPath), `${bgPath} HTML`);
  assertPathExists(routeToHtmlPath(enPath), `${enPath} HTML`);
}

for (const legalPath of bgLegalRoutes) {
  assertPathExists(routeToHtmlPath(legalPath), `${legalPath} HTML`);
}

for (const roPath of approvedRoPreviewRoutes) {
  assertPathExists(routeToHtmlPath(roPath), `${roPath} HTML`);
}

for (const blockedRoPath of blockedRoRoutes) {
  assertPathMissing(routeToHtmlPath(blockedRoPath), `${blockedRoPath} HTML`);
}

const htmlFiles = walkFiles(distDir, (filePath) => filePath.endsWith(".html"));
const rootHtmlPath = path.join(distDir, "index.html");
const prerenderedRouteHtmlFiles = htmlFiles.filter((filePath) => path.resolve(filePath) !== rootHtmlPath);
const enHtmlFiles = htmlFiles.filter((filePath) => relativePath(filePath).startsWith("dist/en/"));
const roHtmlFiles = htmlFiles.filter((filePath) => relativePath(filePath).startsWith("dist/ro/"));
const unexpectedEnHtmlFiles = enHtmlFiles
  .map(relativePath)
  .filter((filePath) => !allowedEnHtmlFiles.has(filePath));
const unexpectedRoHtmlFiles = roHtmlFiles
  .map(relativePath)
  .filter((filePath) => !allowedRoHtmlFiles.has(filePath));

if (enHtmlFiles.length !== allowedEnHtmlFiles.size || unexpectedEnHtmlFiles.length > 0) {
  fail(
    `Expected only approved EN overview, service detail, solution detail and industry detail output, found: ${
      enHtmlFiles.map(relativePath).join(", ") || "none"
    }.`
  );
}

if (roHtmlFiles.length !== EXPECTED_RO_PREVIEW_ROUTE_COUNT || unexpectedRoHtmlFiles.length > 0) {
  fail(
    `Expected only ${EXPECTED_RO_PREVIEW_ROUTE_COUNT} approved RO preview outputs, found: ${
      roHtmlFiles.map(relativePath).join(", ") || "none"
    }.`
  );
}

if (prerenderedRouteHtmlFiles.length !== EXPECTED_PRERENDER_ROUTE_COUNT) {
  fail(
    `Expected ${EXPECTED_PRERENDER_ROUTE_COUNT} prerendered route HTML files, found ${prerenderedRouteHtmlFiles.length}.`
  );
}

for (const htmlFile of htmlFiles.filter((filePath) => !relativePath(filePath).startsWith("dist/ro/"))) {
  const content = fs.readFileSync(htmlFile, "utf8");

  if (/(?:https?:\/\/[^"'\s<>]+)?\/ro\//i.test(content)) {
    fail(`RO URL output found in ${relativePath(htmlFile)}.`);
  }
}

for (const htmlFile of prerenderedRouteHtmlFiles) {
  const content = fs.readFileSync(htmlFile, "utf8");
  assertHtmlExcludes(content, "Switched to client rendering", "SSR client-render fallback", htmlFile);
}

for (const [bgPath, enPath] of approvedBgEnPairs) {
  const bgFile = routeToHtmlPath(bgPath);
  const enFile = routeToHtmlPath(enPath);
  const bgHtml = fs.existsSync(bgFile) ? fs.readFileSync(bgFile, "utf8") : "";
  const enHtml = fs.existsSync(enFile) ? fs.readFileSync(enFile, "utf8") : "";
  const bgUrl = canonicalUrl(bgPath);
  const enUrl = canonicalUrl(enPath);

  assertHtmlIncludes(bgHtml, `<link rel="canonical" href="${bgUrl}" />`, "BG self canonical", bgFile);
  assertHtmlIncludes(enHtml, `<link rel="canonical" href="${enUrl}" />`, "EN self canonical", enFile);
  assertHtmlExcludes(bgHtml, `<link rel="canonical" href="${enUrl}" />`, "cross-locale canonical", bgFile);
  assertHtmlExcludes(enHtml, `<link rel="canonical" href="${bgUrl}" />`, "cross-locale canonical", enFile);

  for (const html of [
    { content: bgHtml, filePath: bgFile },
    { content: enHtml, filePath: enFile },
  ]) {
    assertHtmlIncludes(
      html.content,
      `<link rel="alternate" hreflang="bg" href="${bgUrl}" />`,
      "BG hreflang",
      html.filePath
    );
    assertHtmlIncludes(
      html.content,
      `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
      "EN hreflang",
      html.filePath
    );
    assertHtmlIncludes(
      html.content,
      `<link rel="alternate" hreflang="x-default" href="${bgUrl}" />`,
      "x-default hreflang",
      html.filePath
    );
  }

  assertHtmlExcludes(enHtml, `<meta name="robots" content="noindex, follow" />`, "EN noindex", enFile);
  assertHtmlIncludes(bgHtml, `<meta property="og:locale" content="bg_BG" />`, "BG og:locale", bgFile);
  assertHtmlIncludes(enHtml, `<meta property="og:locale" content="en_US" />`, "EN og:locale", enFile);
}

for (const roPath of approvedRoPreviewRoutes) {
  const roFile = routeToHtmlPath(roPath);
  const roHtml = fs.existsSync(roFile) ? fs.readFileSync(roFile, "utf8") : "";

  assertHtmlIncludes(roHtml, `<link rel="canonical" href="${canonicalUrl(roPath)}" />`, "RO self canonical", roFile);
  assertHtmlIncludes(roHtml, `<meta name="robots" content="noindex, follow" />`, "RO preview noindex", roFile);
  assertHtmlIncludes(roHtml, `<meta property="og:locale" content="ro_RO" />`, "RO og:locale", roFile);
  assertHtmlExcludes(roHtml, "hreflang=", "RO preview hreflang", roFile);
  assertHtmlExcludes(roHtml, ">RO</", "visible RO language switcher option", roFile);

  for (const match of roHtml.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const imageSource = match[1];
    if (imageSource.startsWith("/") && !fs.existsSync(path.join(distDir, imageSource.slice(1)))) {
      fail(`Missing RO image ${imageSource} referenced by ${relativePath(roFile)}.`);
    }
  }

  for (const match of roHtml.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];

    if (href.startsWith("#")) {
      const anchor = href.slice(1);
      if (anchor && !roHtml.includes(`id="${anchor}"`)) {
        fail(`Missing local anchor target ${href} in ${relativePath(roFile)}.`);
      }
      continue;
    }

    if (!href.startsWith("/")) {
      continue;
    }

    const hrefPath = normalizeRoute(href.split(/[?#]/, 1)[0]);
    if (hrefPath.startsWith("/ro") && !approvedRoRouteSet.has(hrefPath)) {
      fail(`Unapproved or missing RO internal route ${href} in ${relativePath(roFile)}.`);
    }
    if (hrefPath.startsWith("/bg") && !bgLegalRouteSet.has(hrefPath)) {
      fail(`Unexpected BG internal route ${href} in ${relativePath(roFile)}.`);
    }
    if (hrefPath.startsWith("/en")) {
      fail(`Unexpected EN internal route ${href} in ${relativePath(roFile)}.`);
    }
  }
}

for (const legalPath of bgLegalRoutes) {
  const legalFile = routeToHtmlPath(legalPath);
  const legalHtml = fs.existsSync(legalFile) ? fs.readFileSync(legalFile, "utf8") : "";

  assertHtmlIncludes(
    legalHtml,
    `<link rel="canonical" href="${canonicalUrl(legalPath)}" />`,
    "BG legal self canonical",
    legalFile
  );
  assertHtmlExcludes(legalHtml, "hreflang=", "legal hreflang", legalFile);
  assertHtmlExcludes(legalHtml, "/en/", "EN legal equivalent", legalFile);
}

const notFoundPath = path.join(distDir, "404", "index.html");
assertPathExists(notFoundPath, "404 HTML");

if (fs.existsSync(notFoundPath)) {
  const notFoundHtml = fs.readFileSync(notFoundPath, "utf8");
  assertHtmlExcludes(notFoundHtml, "hreflang=", "404 hreflang", notFoundPath);
  assertHtmlIncludes(notFoundHtml, `<meta name="robots" content="noindex, follow" />`, "404 noindex", notFoundPath);
}

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrlCount = [...sitemap.matchAll(/<loc>/g)].length;
  const enSitemapUrlCount = [...sitemap.matchAll(/<loc>https:\/\/mallelectro\.com\/en\//g)].length;

  if (sitemapUrlCount !== EXPECTED_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_SITEMAP_URL_COUNT} sitemap URLs, found ${sitemapUrlCount}.`);
  }

  if (enSitemapUrlCount !== EXPECTED_EN_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_EN_SITEMAP_URL_COUNT} EN sitemap URLs, found ${enSitemapUrlCount}.`);
  }

  for (const [bgPath, enPath] of approvedBgEnPairs) {
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(bgPath)}</loc>`, "BG sitemap URL", sitemapPath);
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(enPath)}</loc>`, "EN sitemap URL", sitemapPath);
  }

  for (const legalPath of bgLegalRoutes) {
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(legalPath)}</loc>`, "BG legal sitemap URL", sitemapPath);
  }

  const sitemapDisallowedPatterns = [
    { label: "EN legal sitemap URL", pattern: /\/en\/(?:privacy-policy|cookie-policy|terms-of-use)\//i },
    { label: "RO sitemap URL", pattern: /\/ro\//i },
    { label: "404 sitemap URL", pattern: /\/404\//i },
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
console.log(`- EN sitemap URLs: ${EXPECTED_EN_SITEMAP_URL_COUNT}`);
console.log("- hreflang: present on approved BG/EN mapped pages only");
console.log("- legal pages: BG-only without hreflang");
console.log(`- RO preview routes: ${EXPECTED_RO_PREVIEW_ROUTE_COUNT}`);
console.log("- RO sitemap URLs: absent");
console.log("- RO hreflang: absent");
console.log("- RO legal output: absent");
