import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_PRERENDER_ROUTE_COUNT = 82;
const EXPECTED_SITEMAP_URL_COUNT = 81;
const EXPECTED_EN_SITEMAP_URL_COUNT = 27;
const EXPECTED_RO_ROUTE_COUNT = 27;
const EXPECTED_RO_SITEMAP_URL_COUNT = 27;
const SITE_URL = "https://mallelectro.com";
const EXPECTED_LEGAL_VERSION = "1.0";
const EXPECTED_LEGAL_LAST_UPDATED_DATE = "2026-07-29";
const EXPECTED_LEGAL_EFFECTIVE_DATE = "2026-07-30";
const LEGAL_PUBLICATION_DATE_PLACEHOLDER = "YYYY-MM-DD";
const EXPECTED_LEGAL_LAST_UPDATED_DATE_BY_LOCALE = {
  bg: "29 юли 2026 г.",
  en: "29 July 2026",
  ro: "29 iulie 2026",
};
const EXPECTED_LEGAL_EFFECTIVE_DATE_BY_LOCALE = {
  bg: "30 юли 2026 г.",
  en: "30 July 2026",
  ro: "30 iulie 2026",
};
const BLOCKED_LEGAL_PREVIEW_MARKERS = [
  "Предстои публикуване",
  "Pending publication",
  "În așteptarea publicării",
  "подлежи на финален преглед",
  "subject to final review",
  "supus unei verificări finale",
];
const EXPECTED_LEGAL_ENTITY_BY_LOCALE = {
  bg: "УНИ КОМПАНИ ЕООД",
  en: "UNI COMPANI EOOD",
  ro: "UNI COMPANI EOOD",
};
const EXPECTED_COMPANY_NUMBER = "205154709";
const EXPECTED_VAT_NUMBER = "BG205154709";
const BLOCKED_EXTERNAL_FONT_MARKERS = [
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "Google Fonts",
];
const EXPECTED_LOCAL_FONT_ASSET_STEMS = [
  "inter-cyrillic-wght-normal",
  "inter-latin-ext-wght-normal",
  "inter-latin-wght-normal",
  "roboto-cyrillic-wght-normal",
  "roboto-latin-ext-wght-normal",
  "roboto-latin-wght-normal",
  "roboto-cyrillic-wght-italic",
  "roboto-latin-ext-wght-italic",
  "roboto-latin-wght-italic",
];

const approvedBgEnPairs = [
  ["/bg/", "/en/", "/ro/"],
  ["/bg/kontakti", "/en/contact", "/ro/contact"],
  ["/bg/za-nas", "/en/about", "/ro/despre-noi"],
  ["/bg/uslugi", "/en/services", "/ro/servicii"],
  ["/bg/reshenia", "/en/solutions", "/ro/solutii"],
  ["/bg/industrii", "/en/industries", "/ro/industrii"],
  ["/bg/uslugi/elektricheski-tabla", "/en/services/electrical-panels", "/ro/servicii/tablouri-electrice"],
  ["/bg/uslugi/kabelni-traseta", "/en/services/cable-routes", "/ro/servicii/trasee-de-cabluri"],
  ["/bg/uslugi/industrialni-elektroinstalatsii", "/en/services/industrial-electrical-installations", "/ro/servicii/instalatii-electrice-industriale"],
  ["/bg/uslugi/avtomatizatsia", "/en/services/automation", "/ro/servicii/automatizare"],
  ["/bg/uslugi/nisko-naprezhenie", "/en/services/low-voltage-systems", "/ro/servicii/sisteme-de-joasa-tensiune"],
  ["/bg/uslugi/poddrazhka-i-serviz", "/en/services/maintenance-and-service", "/ro/servicii/mentenanta-si-service"],
  ["/bg/reshenia/nov-proizvodstven-obekt", "/en/solutions/new-production-site", "/ro/solutii/unitate-noua-de-productie"],
  ["/bg/reshenia/modernizatsia-na-elektro-sistema", "/en/solutions/electrical-system-modernization", "/ro/solutii/modernizare-sistem-electric"],
  ["/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii", "/en/solutions/panels-and-automation-for-production-lines", "/ro/solutii/tablouri-si-automatizare-pentru-linii-tehnologice"],
  ["/bg/reshenia/kabelna-infrastruktura-za-baza", "/en/solutions/cable-infrastructure-for-base", "/ro/solutii/infrastructura-de-cabluri-pentru-baza"],
  ["/bg/reshenia/serviz-i-razshiryavane", "/en/solutions/service-and-expansion", "/ro/solutii/service-si-extindere"],
  ["/bg/reshenia/elektromontazh-na-visochina-s-vishka", "/en/solutions/high-access-installation", "/ro/solutii/instalatii-electrice-la-inaltime"],
  ["/bg/industrii/agro", "/en/industries/agriculture", "/ro/industrii/agro"],
  ["/bg/industrii/hvp", "/en/industries/food-industry", "/ro/industrii/industria-alimentara"],
  ["/bg/industrii/zarnoprerabotka", "/en/industries/grain-processing", "/ro/industrii/procesarea-cerealelor"],
  ["/bg/industrii/melnitsi", "/en/industries/mills", "/ro/industrii/mori"],
  ["/bg/industrii/logistika", "/en/industries/logistics", "/ro/industrii/logistica"],
  ["/bg/industrii/proizvodstveni-predpriyatiya", "/en/industries/manufacturing-companies", "/ro/industrii/unitati-de-productie"],
];

const bgLegalRoutes = [
  "/bg/politika-za-poveritelnost",
  "/bg/politika-za-biskvitki",
  "/bg/usloviya-za-polzvane",
];

const legalRouteGroups = [
  ["/bg/politika-za-poveritelnost", "/en/privacy-policy", "/ro/politica-de-confidentialitate"],
  ["/bg/politika-za-biskvitki", "/en/cookie-policy", "/ro/politica-cookie"],
  ["/bg/usloviya-za-polzvane", "/en/terms-of-use", "/ro/termeni-de-utilizare"],
];

const enLegalRoutes = legalRouteGroups.map(([, enPath]) => enPath);
const roLegalRoutes = legalRouteGroups.map(([, , roPath]) => roPath);

const approvedRoPublicRoutes = approvedBgEnPairs.map(([, , roPath]) => roPath);
const approvedRoRoutes = [
  ...approvedRoPublicRoutes,
  ...roLegalRoutes,
];

const blockedRoRoutes = [
  "/ro/404",
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const legalContentSourcePath = path.join(projectRoot, "data", "i18n", "legalContent.ts");

const failures = [];

const fail = (message) => {
  failures.push(message);
};

const normalizeRoute = (routePath) => (routePath.length > 1 ? routePath.replace(/\/$/, "") : routePath);
const approvedRoRouteSet = new Set(approvedRoRoutes.map((routePath) => normalizeRoute(routePath)));
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

const assertLanguageSwitcher = (routePaths) => {
  const locales = ["BG", "EN", "RO"];

  routePaths.forEach((currentPath, currentIndex) => {
    const currentFile = routeToHtmlPath(currentPath);
    const html = fs.existsSync(currentFile) ? fs.readFileSync(currentFile, "utf8") : "";
    const activeLabels = [...html.matchAll(/<span[^>]*>(BG|EN|RO)<\/span>/g)].map((match) => match[1]);
    const linkedOptions = new Map(
      [...html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>(BG|EN|RO)<\/a>/g)].map((match) => [match[2], match[1]])
    );

    if (activeLabels.length === 0 || activeLabels.some((label) => label !== locales[currentIndex])) {
      fail(`Expected only ${locales[currentIndex]} to be active in every switcher in ${relativePath(currentFile)}.`);
    }

    routePaths.forEach((targetPath, targetIndex) => {
      const targetLocale = locales[targetIndex];
      if (targetIndex === currentIndex) {
        if (linkedOptions.has(targetLocale)) {
          fail(`Active ${targetLocale} switcher option must not be a link in ${relativePath(currentFile)}.`);
        }
      } else if (linkedOptions.get(targetLocale) !== targetPath) {
        fail(`Expected ${targetLocale} switcher target ${targetPath} in ${relativePath(currentFile)}.`);
      }
    });
  });
};

const legalRoutesByLocale = {
  bg: bgLegalRoutes,
  en: enLegalRoutes,
  ro: roLegalRoutes,
};

const assertLocaleCorrectLegalFooter = (routePath, locale) => {
  const filePath = routeToHtmlPath(routePath);
  const html = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "";

  if (!footer) {
    fail(`Footer missing in ${relativePath(filePath)}.`);
    return;
  }

  for (const legalPath of legalRoutesByLocale[locale]) {
    assertHtmlIncludes(footer, `href="${legalPath}"`, `${locale.toUpperCase()} legal footer link`, filePath);
  }

  for (const [otherLocale, legalPaths] of Object.entries(legalRoutesByLocale)) {
    if (otherLocale === locale) {
      continue;
    }

    for (const legalPath of legalPaths) {
      assertHtmlExcludes(footer, `href="${legalPath}"`, `wrong-locale ${otherLocale.toUpperCase()} legal footer link`, filePath);
    }
  }
};

const assertLegalDocumentFacts = (routePath, locale) => {
  const filePath = routeToHtmlPath(routePath);
  const html = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";

  assertHtmlIncludes(html, EXPECTED_LEGAL_ENTITY_BY_LOCALE[locale], `${locale.toUpperCase()} legal entity`, filePath);
  assertHtmlIncludes(html, EXPECTED_COMPANY_NUMBER, `${locale.toUpperCase()} company number`, filePath);
  assertHtmlIncludes(html, EXPECTED_VAT_NUMBER, `${locale.toUpperCase()} VAT number`, filePath);
  assertHtmlIncludes(html, EXPECTED_LEGAL_VERSION, `${locale.toUpperCase()} legal version`, filePath);
  assertHtmlIncludes(html, EXPECTED_LEGAL_LAST_UPDATED_DATE_BY_LOCALE[locale], `${locale.toUpperCase()} legal last updated date`, filePath);
  assertHtmlIncludes(html, EXPECTED_LEGAL_EFFECTIVE_DATE_BY_LOCALE[locale], `${locale.toUpperCase()} legal effective date`, filePath);
  assertHtmlExcludes(html, LEGAL_PUBLICATION_DATE_PLACEHOLDER, `${locale.toUpperCase()} raw publication date placeholder`, filePath);
  for (const marker of BLOCKED_LEGAL_PREVIEW_MARKERS) {
    assertHtmlExcludes(html, marker, `${locale.toUpperCase()} legal preview marker`, filePath);
  }
};

assertPathExists(distDir, "dist");
assertPathExists(sitemapPath, "sitemap.xml");
assertPathExists(legalContentSourcePath, "legalContent.ts");

if (fs.existsSync(legalContentSourcePath)) {
  const legalContentSource = fs.readFileSync(legalContentSourcePath, "utf8");
  assertHtmlIncludes(legalContentSource, `LEGAL_DOCUMENT_VERSION = "${EXPECTED_LEGAL_VERSION}"`, "legal version constant", legalContentSourcePath);
  assertHtmlIncludes(legalContentSource, `LEGAL_LAST_UPDATED_DATE = "${EXPECTED_LEGAL_LAST_UPDATED_DATE}"`, "legal last updated constant", legalContentSourcePath);
  assertHtmlIncludes(legalContentSource, `LEGAL_EFFECTIVE_DATE = "${EXPECTED_LEGAL_EFFECTIVE_DATE}"`, "legal effective date constant", legalContentSourcePath);
  assertHtmlExcludes(legalContentSource, LEGAL_PUBLICATION_DATE_PLACEHOLDER, "legal publication date placeholder", legalContentSourcePath);
  for (const marker of BLOCKED_LEGAL_PREVIEW_MARKERS) {
    assertHtmlExcludes(legalContentSource, marker, "legal preview marker", legalContentSourcePath);
  }
}

const searchableOutputFiles = walkFiles(
  distDir,
  (filePath) => /\.(?:css|html|js|json|map|svg|txt|webmanifest|xml)$/i.test(filePath)
);
for (const filePath of searchableOutputFiles) {
  const output = fs.readFileSync(filePath, "utf8");
  for (const marker of BLOCKED_EXTERNAL_FONT_MARKERS) {
    assertHtmlExcludes(output, marker, `blocked external font marker ${marker}`, filePath);
  }
}

const localFontAssets = walkFiles(distDir, (filePath) => filePath.endsWith(".woff2"));
for (const assetStem of EXPECTED_LOCAL_FONT_ASSET_STEMS) {
  if (!localFontAssets.some((filePath) => path.basename(filePath).includes(assetStem))) {
    fail(`Required local WOFF2 font asset missing for ${assetStem}.`);
  }
}

const approvedEnRoutes = [
  ...approvedBgEnPairs.map(([, enPath]) => enPath),
  ...enLegalRoutes,
];
const allowedEnHtmlFiles = new Set(approvedEnRoutes.map((routePath) => relativePath(routeToHtmlPath(routePath))));
const allowedRoHtmlFiles = new Set(approvedRoRoutes.map((routePath) => relativePath(routeToHtmlPath(routePath))));

for (const [bgPath, enPath] of approvedBgEnPairs) {
  assertPathExists(routeToHtmlPath(bgPath), `${bgPath} HTML`);
  assertPathExists(routeToHtmlPath(enPath), `${enPath} HTML`);
}

for (const routePaths of approvedBgEnPairs) {
  assertLanguageSwitcher(routePaths);
}

for (const routePaths of legalRouteGroups) {
  assertLanguageSwitcher(routePaths);
}

for (const routePaths of [...approvedBgEnPairs, ...legalRouteGroups]) {
  routePaths.forEach((routePath, localeIndex) => {
    assertLocaleCorrectLegalFooter(routePath, ["bg", "en", "ro"][localeIndex]);
  });
}

for (const routePaths of legalRouteGroups) {
  routePaths.forEach((routePath, localeIndex) => {
    assertLegalDocumentFacts(routePath, ["bg", "en", "ro"][localeIndex]);
  });
}

for (const legalPath of bgLegalRoutes) {
  assertPathExists(routeToHtmlPath(legalPath), `${legalPath} HTML`);
}

for (const roPath of approvedRoRoutes) {
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

if (roHtmlFiles.length !== EXPECTED_RO_ROUTE_COUNT || unexpectedRoHtmlFiles.length > 0) {
  fail(
    `Expected only ${EXPECTED_RO_ROUTE_COUNT} approved RO outputs, found: ${
      roHtmlFiles.map(relativePath).join(", ") || "none"
    }.`
  );
}

if (prerenderedRouteHtmlFiles.length !== EXPECTED_PRERENDER_ROUTE_COUNT) {
  fail(
    `Expected ${EXPECTED_PRERENDER_ROUTE_COUNT} prerendered route HTML files, found ${prerenderedRouteHtmlFiles.length}.`
  );
}

for (const htmlFile of prerenderedRouteHtmlFiles) {
  const content = fs.readFileSync(htmlFile, "utf8");
  assertHtmlExcludes(content, "Switched to client rendering", "SSR client-render fallback", htmlFile);
}

for (const [bgPath, enPath, roPath] of approvedBgEnPairs) {
  const bgFile = routeToHtmlPath(bgPath);
  const enFile = routeToHtmlPath(enPath);
  const roFile = routeToHtmlPath(roPath);
  const bgHtml = fs.existsSync(bgFile) ? fs.readFileSync(bgFile, "utf8") : "";
  const enHtml = fs.existsSync(enFile) ? fs.readFileSync(enFile, "utf8") : "";
  const roHtml = fs.existsSync(roFile) ? fs.readFileSync(roFile, "utf8") : "";
  const bgUrl = canonicalUrl(bgPath);
  const enUrl = canonicalUrl(enPath);
  const roUrl = canonicalUrl(roPath);

  assertHtmlIncludes(bgHtml, `<link rel="canonical" href="${bgUrl}" />`, "BG self canonical", bgFile);
  assertHtmlIncludes(enHtml, `<link rel="canonical" href="${enUrl}" />`, "EN self canonical", enFile);
  assertHtmlIncludes(roHtml, `<link rel="canonical" href="${roUrl}" />`, "RO self canonical", roFile);
  assertHtmlExcludes(bgHtml, `<link rel="canonical" href="${enUrl}" />`, "cross-locale canonical", bgFile);
  assertHtmlExcludes(enHtml, `<link rel="canonical" href="${bgUrl}" />`, "cross-locale canonical", enFile);
  assertHtmlExcludes(bgHtml, `<link rel="canonical" href="${roUrl}" />`, "cross-locale canonical", bgFile);
  assertHtmlExcludes(enHtml, `<link rel="canonical" href="${roUrl}" />`, "cross-locale canonical", enFile);
  assertHtmlExcludes(roHtml, `<link rel="canonical" href="${bgUrl}" />`, "cross-locale canonical", roFile);
  assertHtmlExcludes(roHtml, `<link rel="canonical" href="${enUrl}" />`, "cross-locale canonical", roFile);

  for (const html of [
    { content: bgHtml, filePath: bgFile },
    { content: enHtml, filePath: enFile },
    { content: roHtml, filePath: roFile },
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
      `<link rel="alternate" hreflang="ro" href="${roUrl}" />`,
      "RO hreflang",
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
  assertHtmlExcludes(roHtml, `<meta name="robots" content="noindex, follow" />`, "RO noindex", roFile);
  assertHtmlIncludes(bgHtml, `<meta property="og:locale" content="bg_BG" />`, "BG og:locale", bgFile);
  assertHtmlIncludes(enHtml, `<meta property="og:locale" content="en_US" />`, "EN og:locale", enFile);
  assertHtmlIncludes(roHtml, `<meta property="og:locale" content="ro_RO" />`, "RO og:locale", roFile);
}

for (const roPath of approvedRoPublicRoutes) {
  const roFile = routeToHtmlPath(roPath);
  const roHtml = fs.existsSync(roFile) ? fs.readFileSync(roFile, "utf8") : "";
  const routeGroup = approvedBgEnPairs.find(([, , approvedRoPath]) => approvedRoPath === roPath);
  const allowedBgEquivalent = routeGroup?.[0];
  const allowedEnEquivalent = routeGroup?.[1];

  assertHtmlIncludes(roHtml, `<link rel="canonical" href="${canonicalUrl(roPath)}" />`, "RO self canonical", roFile);
  assertHtmlExcludes(roHtml, `<meta name="robots" content="noindex, follow" />`, "RO noindex", roFile);
  assertHtmlIncludes(roHtml, `<meta property="og:locale" content="ro_RO" />`, "RO og:locale", roFile);
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
    if (hrefPath.startsWith("/bg") && !bgLegalRouteSet.has(hrefPath) && hrefPath !== normalizeRoute(allowedBgEquivalent ?? "")) {
      fail(`Unexpected BG internal route ${href} in ${relativePath(roFile)}.`);
    }
    if (hrefPath.startsWith("/en") && hrefPath !== normalizeRoute(allowedEnEquivalent ?? "")) {
      fail(`Unexpected EN internal route ${href} in ${relativePath(roFile)}.`);
    }
  }
}

for (const [bgPath, enPath, roPath] of legalRouteGroups) {
  const localizedLegalRoutes = [
    { locale: "bg", path: bgPath },
    { locale: "en", path: enPath },
    { locale: "ro", path: roPath },
  ];
  const bgUrl = canonicalUrl(bgPath);
  const enUrl = canonicalUrl(enPath);
  const roUrl = canonicalUrl(roPath);

  for (const route of localizedLegalRoutes) {
    const legalFile = routeToHtmlPath(route.path);
    const legalHtml = fs.existsSync(legalFile) ? fs.readFileSync(legalFile, "utf8") : "";

    assertPathExists(legalFile, `${route.path} HTML`);
    assertHtmlIncludes(
      legalHtml,
      `<link rel="canonical" href="${canonicalUrl(route.path)}" />`,
      `${route.locale.toUpperCase()} legal self canonical`,
      legalFile
    );
    assertHtmlExcludes(legalHtml, `<meta name="robots" content="noindex, follow" />`, `${route.locale.toUpperCase()} legal noindex`, legalFile);
    assertHtmlIncludes(legalHtml, `<link rel="alternate" hreflang="bg" href="${bgUrl}" />`, "BG legal hreflang", legalFile);
    assertHtmlIncludes(legalHtml, `<link rel="alternate" hreflang="en" href="${enUrl}" />`, "EN legal hreflang", legalFile);
    assertHtmlIncludes(legalHtml, `<link rel="alternate" hreflang="ro" href="${roUrl}" />`, "RO legal hreflang", legalFile);
    assertHtmlIncludes(legalHtml, `<link rel="alternate" hreflang="x-default" href="${bgUrl}" />`, "legal x-default hreflang", legalFile);

    const allowedCrossLocalePaths = new Set(localizedLegalRoutes.map((entry) => normalizeRoute(entry.path)));
    for (const match of legalHtml.matchAll(/href="(\/(?:bg|en|ro)[^"]*)"/g)) {
      const hrefPath = normalizeRoute(match[1].split(/[?#]/, 1)[0]);
      const isCurrentLocalePath = hrefPath === `/${route.locale}` || hrefPath.startsWith(`/${route.locale}/`);

      if (!isCurrentLocalePath && !allowedCrossLocalePaths.has(hrefPath)) {
        fail(`Wrong-locale legal link ${match[1]} found in ${relativePath(legalFile)}.`);
      }
    }

    for (const legalPath of legalRoutesByLocale[route.locale]) {
      assertHtmlIncludes(
        legalHtml,
        `href="${legalPath}"`,
        `${route.locale.toUpperCase()} locale-correct legal footer link`,
        legalFile
      );
    }
  }
}

const notFoundPath = path.join(distDir, "404", "index.html");
assertPathExists(notFoundPath, "404 HTML");

if (fs.existsSync(notFoundPath)) {
  const notFoundHtml = fs.readFileSync(notFoundPath, "utf8");
  assertHtmlExcludes(notFoundHtml, "hreflang=", "404 hreflang", notFoundPath);
  assertHtmlIncludes(notFoundHtml, `<meta name="robots" content="noindex, follow" />`, "404 noindex", notFoundPath);
  assertHtmlExcludes(notFoundHtml, ">EN</", "404 EN switcher option", notFoundPath);
  assertHtmlExcludes(notFoundHtml, ">RO</", "404 RO switcher option", notFoundPath);
}

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrlCount = [...sitemap.matchAll(/<loc>/g)].length;
  const enSitemapUrlCount = [...sitemap.matchAll(/<loc>https:\/\/mallelectro\.com\/en\//g)].length;
  const roSitemapUrlCount = [...sitemap.matchAll(/<loc>https:\/\/mallelectro\.com\/ro\//g)].length;

  if (sitemapUrlCount !== EXPECTED_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_SITEMAP_URL_COUNT} sitemap URLs, found ${sitemapUrlCount}.`);
  }

  if (enSitemapUrlCount !== EXPECTED_EN_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_EN_SITEMAP_URL_COUNT} EN sitemap URLs, found ${enSitemapUrlCount}.`);
  }

  if (roSitemapUrlCount !== EXPECTED_RO_SITEMAP_URL_COUNT) {
    fail(`Expected ${EXPECTED_RO_SITEMAP_URL_COUNT} RO sitemap URLs, found ${roSitemapUrlCount}.`);
  }

  for (const [bgPath, enPath, roPath] of approvedBgEnPairs) {
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(bgPath)}</loc>`, "BG sitemap URL", sitemapPath);
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(enPath)}</loc>`, "EN sitemap URL", sitemapPath);
    assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(roPath)}</loc>`, "RO sitemap URL", sitemapPath);
  }

  for (const legalRouteGroup of legalRouteGroups) {
    for (const legalPath of legalRouteGroup) {
      assertHtmlIncludes(sitemap, `<loc>${canonicalUrl(legalPath)}</loc>`, "localized legal sitemap URL", sitemapPath);
    }
  }

  const sitemapDisallowedPatterns = [
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
console.log(`- RO sitemap URLs: ${EXPECTED_RO_SITEMAP_URL_COUNT}`);
console.log("- hreflang: present on approved BG/EN/RO mapped pages only");
console.log("- legal pages: 9 indexable pages in 3 reciprocal BG/EN/RO hreflang groups");
console.log(`- RO routes: ${EXPECTED_RO_ROUTE_COUNT}`);
console.log(`- language switcher groups: ${approvedBgEnPairs.length + legalRouteGroups.length} with BG/EN/RO parity`);
console.log("- RO noindex: absent on approved routes");
console.log("- EN/RO legal sitemap URLs: 6 published URLs");
