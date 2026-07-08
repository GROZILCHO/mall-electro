import React, { useEffect } from "react";
import {
  getAbsoluteAssetUrl,
  getAlternateLinksForPath,
  getCanonicalUrl,
  getOgLocaleForPath,
  getSchemasForRoute,
  getSeoRoute,
  shouldNoindexRoute,
  SITE_NAME,
  type SeoPageKey,
} from "../../seo/seoConfig";

interface SEOProps {
  page: SeoPageKey;
}

const SEO: React.FC<SEOProps> = ({ page }) => {
  const route = getSeoRoute(page);
  const canonicalUrl = getCanonicalUrl(route.path);
  const imageUrl = getAbsoluteAssetUrl(route.ogImage);
  const schemas = getSchemasForRoute(route);
  const alternates = getAlternateLinksForPath(route.path);

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    <>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      {shouldNoindexRoute(route) && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      {alternates.map((alternate) => (
        <link
          key={alternate.hreflang}
          rel="alternate"
          hrefLang={alternate.hreflang}
          href={alternate.href}
        />
      ))}

      <meta property="og:locale" content={getOgLocaleForPath(route.path)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
};

export default SEO;
