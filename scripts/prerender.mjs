import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getSeoRouteByPath,
  render,
  renderHeadTags,
  seoRoutes,
  SITE_URL,
} from "../dist/server/entry-server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

const removeTemplateSeo = (html) =>
  html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name=["']description["'][\s\S]*?>/i, "")
    .replace(/\s*<meta\s+name=["']robots["'][\s\S]*?>/i, "")
    .replace(/\s*<link\s+rel=["']canonical["'][\s\S]*?>/gi, "")
    .replace(/\s*<meta\s+(?:name|property)=["'](?:og:[^"']+|twitter:[^"']+)["'][\s\S]*?>/gi, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, "");

const stripRenderedHeadTagsFromRoot = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\s+(?:name|property)=["'](?:description|robots|og:[^"']+|twitter:[^"']+)["'][\s\S]*?>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][\s\S]*?>/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, "");

const writeFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
};

for (const route of seoRoutes) {
  const renderedRoute = getSeoRouteByPath(route.path);
  const appHtml = stripRenderedHeadTagsFromRoot(render(route.path));
  const html = removeTemplateSeo(template)
    .replace("</head>", `    ${renderHeadTags(renderedRoute)}\n  </head>`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);

  const outputPath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.replace(/^\//, ""), "index.html");

  writeFile(outputPath, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .filter((route) => route.includeInSitemap !== false)
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path === "/" ? "/" : `${route.path}/`}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFile(path.join(distDir, "sitemap.xml"), sitemap);
writeFile(path.join(distDir, "robots.txt"), robots);

fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });

console.log(`Prerendered ${seoRoutes.length} routes and generated robots.txt + sitemap.xml.`);
