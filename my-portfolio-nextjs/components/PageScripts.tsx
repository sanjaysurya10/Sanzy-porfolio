"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    initPortfolio?: () => void;
  }
}

export default function PageScripts(): null {
  const pathname = usePathname();

  useEffect(() => {
    window.initPortfolio?.();
  }, [pathname]);

  return null;
}
