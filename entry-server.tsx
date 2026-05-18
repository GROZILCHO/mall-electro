import React from "react";
import { renderToString } from "react-dom/server";
import App, { loadSsrPagesForPath } from "./App";
import {
  DEFAULT_OG_IMAGE,
  getAbsoluteAssetUrl,
  getCanonicalUrl,
  getSchemasForRoute,
  getSeoRouteByPath,
  seoRoutes,
  SITE_NAME,
  SITE_URL,
  type SeoRoute,
} from "./seo/seoConfig";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const renderJsonLd = (schema: Record<string, unknown>) =>
  `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

export const render = async (path: string) => {
  const ssrPages = await loadSsrPagesForPath(path);
  return renderToString(<App ssrPath={path} ssrPages={ssrPages} />);
};

export const renderHeadTags = (route: SeoRoute) => {
  const canonicalUrl = getCanonicalUrl(route.path);
  const imageUrl = getAbsoluteAssetUrl(route.ogImage ?? DEFAULT_OG_IMAGE);
  const schemas = getSchemasForRoute(route);

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    ...(route.noindex ? [`<meta name="robots" content="noindex, follow" />`] : []),
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:locale" content="bg_BG" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    ...schemas.map(renderJsonLd),
  ].join("\n    ");
};

export { getSeoRouteByPath, seoRoutes, SITE_URL };
