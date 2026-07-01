import { Link, useLocation } from "react-router-dom";
import { getLanguageSwitchOptions } from "../../data/i18n/languageSwitchRoutes";

interface LanguageSwitcherProps {
  onNavigate?: () => void;
}

export default function LanguageSwitcher({ onNavigate }: LanguageSwitcherProps) {
  const location = useLocation();
  const options = getLanguageSwitchOptions(location.pathname);

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="inline-flex items-center overflow-hidden rounded border border-white/15 bg-white/[0.04] text-xs font-bold uppercase tracking-[0.16em]">
      {options.map((option) =>
        option.isActive ? (
          <span key={option.locale} className="bg-brand-orange px-3 py-2 text-white">
            {option.label}
          </span>
        ) : (
          <Link
            key={option.locale}
            to={option.href}
            onClick={onNavigate}
            className="px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {option.label}
          </Link>
        )
      )}
    </div>
  );
}
