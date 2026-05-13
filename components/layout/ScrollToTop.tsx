import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash || typeof window === "undefined") {
      return;
    }

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}
