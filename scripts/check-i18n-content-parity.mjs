import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const enRoot = path.join(projectRoot, "data", "i18n", "content", "en");
const roRoot = path.join(projectRoot, "data", "i18n", "content", "ro");

const requiredFiles = [
  "common.ts",
  "navigation.ts",
  "footer.ts",
  "forms.ts",
  "pages/home.ts",
  "pages/about.ts",
  "pages/contact.ts",
  "pages/services.ts",
  "pages/solutions.ts",
  "pages/industries.ts",
];

const futureDetailFiles = [
  "pages/serviceDetails.ts",
  "pages/solutionDetails.ts",
  "pages/industryDetails.ts",
];

const failures = [];
const stats = {
  comparedFiles: 0,
  missingFiles: 0,
  missingKeys: 0,
  arrayMismatches: 0,
  emptyStrings: 0,
  untranslatedStrings: 0,
  cyrillicStrings: 0,
  wrongLocaleHrefs: 0,
  missingAssets: 0,
};

const fail = (category, message) => {
  stats[category] += 1;
  failures.push(message);
};

const relativePath = (targetPath) => path.relative(projectRoot, targetPath).replace(/\\/g, "/");

const unwrap = (node) => {
  let current = node;

  while (
    ts.isParenthesizedExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isNonNullExpression(current)
  ) {
    current = current.expression;
  }

  return current;
};

const propertyName = (name) => {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }

  return name.getText();
};

const parseExports = (filePath) => {
  const source = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const exports = new Map();

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    const isExported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
    if (!isExported) continue;

    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
      exports.set(declaration.name.text, unwrap(declaration.initializer));
    }
  }

  return exports;
};

const getPlannedRoPaths = () => {
  const routesFile = path.join(projectRoot, "data", "i18n", "routes.ts");
  const exports = parseExports(routesFile);
  const localizedRoutes = exports.get("localizedRoutes");

  if (!localizedRoutes || !ts.isObjectLiteralExpression(localizedRoutes)) {
    throw new Error(`Unable to read localizedRoutes from ${relativePath(routesFile)}.`);
  }

  const roRoutes = objectProperties(localizedRoutes).get("ro");
  if (!roRoutes || !ts.isObjectLiteralExpression(unwrap(roRoutes))) {
    throw new Error(`Unable to read Romanian route definitions from ${relativePath(routesFile)}.`);
  }

  const paths = new Set();
  for (const definition of objectProperties(unwrap(roRoutes)).values()) {
    const call = unwrap(definition);
    if (!ts.isCallExpression(call) || call.arguments.length === 0) continue;
    const routePath = stringValue(call.arguments[0]);
    if (routePath) paths.add(routePath.length > 1 ? routePath.replace(/\/$/, "") : routePath);
  }

  return paths;
};

const objectProperties = (node) => {
  const properties = new Map();

  for (const property of node.properties) {
    if (ts.isPropertyAssignment(property)) {
      properties.set(propertyName(property.name), unwrap(property.initializer));
    } else if (ts.isShorthandPropertyAssignment(property)) {
      properties.set(property.name.text, property.name);
    }
  }

  return properties;
};

const stringValue = (node) => {
  const value = unwrap(node);
  return ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value) ? value.text : null;
};

const plannedRoPaths = getPlannedRoPaths();

const isAllowlistedExactCopy = (value, valuePath) => {
  if (value.length < 18) return true;
  if (/^(?:https?:|mailto:|tel:|\/|#)/i.test(value)) return true;
  if (/\.(?:png|jpe?g|webp|avif|svg)$/i.test(value)) return true;
  if (/(?:^|\.)(?:icon|id|key|groups|menuRouteKeys|serviceRouteKeys|legalRouteKeys)(?:\.|\[|$)/.test(valuePath)) {
    return true;
  }
  if (/^(?:CAD_|PROJECT:|SYSTEM STATUS:)/.test(value)) return true;
  if (/^(?:Siemens|Schneider|Eaton|ABB|Rittal|Phoenix Contact)$/.test(value)) return true;
  if (/^© \d{4} Mall Electro\.$/.test(value)) return true;
  return false;
};

const inspectRomanianString = (value, valuePath, filePath) => {
  const label = `${relativePath(filePath)}:${valuePath}`;

  if (value.trim().length === 0) {
    fail("emptyStrings", `Empty Romanian string at ${label}.`);
  }

  if (/[\u0400-\u04ff]/u.test(value)) {
    fail("cyrillicStrings", `Cyrillic characters found at ${label}.`);
  }

  if (/[şţŞŢ]/u.test(value)) {
    fail("cyrillicStrings", `Cedilla Romanian character found at ${label}; use ș/ț variants.`);
  }

  if (/(?:^|\.)(?:href|primaryCtaHref|secondaryCtaHref|ctaHref)(?:$|\.)/i.test(valuePath)) {
    if (/^\/(?:bg|en)(?:\/|$)/i.test(value)) {
      fail("wrongLocaleHrefs", `Wrong-locale internal href "${value}" at ${label}.`);
    }

    if (/^\/ro(?:\/|$)/i.test(value)) {
      const normalizedHref = value.length > 1 ? value.replace(/\/$/, "") : value;
      if (!plannedRoPaths.has(normalizedHref)) {
        fail("wrongLocaleHrefs", `Romanian href is not a planned route: "${value}" at ${label}.`);
      }
    }
  }

  if (value.startsWith("/images/")) {
    const assetPath = path.join(projectRoot, "assets", value.slice(1));
    if (!fs.existsSync(assetPath)) {
      fail("missingAssets", `Missing referenced asset "${value}" at ${label}.`);
    }
  }
};

const compareNodes = (enNode, roNode, valuePath, filePath) => {
  const en = unwrap(enNode);
  const ro = unwrap(roNode);

  if (ts.isObjectLiteralExpression(en)) {
    if (!ts.isObjectLiteralExpression(ro)) {
      fail("missingKeys", `Expected object at ${relativePath(filePath)}:${valuePath}.`);
      return;
    }

    const enProperties = objectProperties(en);
    const roProperties = objectProperties(ro);

    for (const [key, enValue] of enProperties) {
      const childPath = valuePath ? `${valuePath}.${key}` : key;
      const roValue = roProperties.get(key);

      if (!roValue) {
        fail("missingKeys", `Missing Romanian key at ${relativePath(filePath)}:${childPath}.`);
        continue;
      }

      compareNodes(enValue, roValue, childPath, filePath);
    }

    for (const key of roProperties.keys()) {
      if (!enProperties.has(key)) {
        fail("missingKeys", `Unexpected Romanian key at ${relativePath(filePath)}:${valuePath}.${key}.`);
      }
    }

    return;
  }

  if (ts.isArrayLiteralExpression(en)) {
    if (!ts.isArrayLiteralExpression(ro)) {
      fail("arrayMismatches", `Expected array at ${relativePath(filePath)}:${valuePath}.`);
      return;
    }

    if (en.elements.length !== ro.elements.length) {
      fail(
        "arrayMismatches",
        `Array length mismatch at ${relativePath(filePath)}:${valuePath} (${en.elements.length} EN / ${ro.elements.length} RO).`
      );
    }

    const comparableLength = Math.min(en.elements.length, ro.elements.length);
    for (let index = 0; index < comparableLength; index += 1) {
      compareNodes(en.elements[index], ro.elements[index], `${valuePath}[${index}]`, filePath);
    }

    return;
  }

  const enString = stringValue(en);
  const roString = stringValue(ro);

  if (enString !== null) {
    if (roString === null) {
      fail("missingKeys", `Expected Romanian string at ${relativePath(filePath)}:${valuePath}.`);
      return;
    }

    inspectRomanianString(roString, valuePath, filePath);

    if (enString === roString && !isAllowlistedExactCopy(roString, valuePath)) {
      fail(
        "untranslatedStrings",
        `Suspicious untranslated EN string at ${relativePath(filePath)}:${valuePath}: "${roString}".`
      );
    }

    return;
  }

  if (en.kind !== ro.kind) {
    fail("missingKeys", `Value shape mismatch at ${relativePath(filePath)}:${valuePath}.`);
  }
};

const filesToCompare = [...requiredFiles];
for (const relativeFile of futureDetailFiles) {
  if (fs.existsSync(path.join(roRoot, relativeFile))) {
    filesToCompare.push(relativeFile);
  }
}

for (const relativeFile of filesToCompare) {
  const enFile = path.join(enRoot, relativeFile);
  const roFile = path.join(roRoot, relativeFile);

  if (!fs.existsSync(enFile)) {
    fail("missingFiles", `Missing EN structural source: ${relativePath(enFile)}.`);
    continue;
  }

  if (!fs.existsSync(roFile)) {
    fail("missingFiles", `Missing Romanian content file: ${relativePath(roFile)}.`);
    continue;
  }

  const enExports = parseExports(enFile);
  const roExports = parseExports(roFile);
  stats.comparedFiles += 1;

  if (enExports.size === 0) {
    fail("missingKeys", `No exported content objects found in ${relativePath(enFile)}.`);
    continue;
  }

  for (const [exportName, enValue] of enExports) {
    const roValue = roExports.get(exportName);
    if (!roValue) {
      fail("missingKeys", `Missing Romanian export "${exportName}" in ${relativePath(roFile)}.`);
      continue;
    }

    compareNodes(enValue, roValue, exportName, roFile);
  }
}

if (failures.length > 0) {
  console.error("I18N content parity guard failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("I18N content parity guard passed.");
console.log(`- compared EN/RO files: ${stats.comparedFiles}`);
console.log("- missing files: none");
console.log("- missing keys: none");
console.log("- array length mismatches: none");
console.log("- empty Romanian strings: none");
console.log("- suspicious untranslated EN strings: none");
console.log("- Cyrillic or cedilla characters in RO content: none");
console.log("- wrong-locale Romanian internal hrefs: none");
console.log("- missing referenced image assets: none");
