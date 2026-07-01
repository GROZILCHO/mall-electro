type LocaleCode = "bg" | "en";

export interface LanguageSwitchOption {
  locale: LocaleCode;
  label: string;
  href: string;
  isActive: boolean;
}

const routePairs = [
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
] as const;

const normalizePath = (path: string): string => (path.length > 1 ? path.replace(/\/$/, "") : path);

const bgToEnPath = new Map(routePairs.map(([bgPath, enPath]) => [normalizePath(bgPath), enPath]));
const enToBgPath = new Map(routePairs.map(([bgPath, enPath]) => [normalizePath(enPath), bgPath]));

export const getLanguageSwitchOptions = (path: string): readonly LanguageSwitchOption[] => {
  const normalizedPath = normalizePath(path);
  const enPath = bgToEnPath.get(normalizedPath);

  if (enPath) {
    return [
      { locale: "bg", label: "BG", href: normalizedPath === "/bg" ? "/bg/" : normalizedPath, isActive: true },
      { locale: "en", label: "EN", href: enPath, isActive: false },
    ];
  }

  const bgPath = enToBgPath.get(normalizedPath);

  if (bgPath) {
    return [
      { locale: "bg", label: "BG", href: bgPath, isActive: false },
      { locale: "en", label: "EN", href: normalizedPath === "/en" ? "/en/" : normalizedPath, isActive: true },
    ];
  }

  return [];
};
