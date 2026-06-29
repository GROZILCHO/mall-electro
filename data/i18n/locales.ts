import type { LocaleDefinition, SupportedLocale } from "./types";

export const DEFAULT_LOCALE = "bg" satisfies SupportedLocale;

export const SUPPORTED_LOCALES = ["bg", "en", "ro"] as const satisfies readonly SupportedLocale[];

export const localeDefinitions = {
  bg: {
    code: "bg",
    label: "Bulgarian",
    nativeLabel: "Български",
    isDefault: true,
    isPublic: true,
  },
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    isDefault: false,
    isPublic: false,
  },
  ro: {
    code: "ro",
    label: "Romanian",
    nativeLabel: "Română",
    isDefault: false,
    isPublic: false,
  },
} as const satisfies Record<SupportedLocale, LocaleDefinition>;

export const isSupportedLocale = (locale: string): locale is SupportedLocale =>
  SUPPORTED_LOCALES.includes(locale as SupportedLocale);

export const normalizeLocale = (locale: string | null | undefined): SupportedLocale => {
  const normalizedLocale = locale?.toLowerCase();
  return normalizedLocale && isSupportedLocale(normalizedLocale) ? normalizedLocale : DEFAULT_LOCALE;
};

export const getLocaleFromPath = (path: string): SupportedLocale | null => {
  const [, maybeLocale] = path.split("/");
  return maybeLocale && isSupportedLocale(maybeLocale) ? maybeLocale : null;
};
