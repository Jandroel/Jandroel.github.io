"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { type Locale, translations } from "@/lib/i18n";

const storageKey = "jandroel-portfolio-locale-v3";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const subscribeToLocaleSnapshot = (onStoreChange: () => void) => {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
};

function getInitialLocale(fallback: Locale): Locale {
  if (typeof window === "undefined") {
    return fallback;
  }

  const urlLocale = new URLSearchParams(window.location.search).get("lang");

  if (urlLocale === "en" || urlLocale === "es") {
    return urlLocale;
  }

  let stored: string | null = null;

  try {
    stored = window.localStorage?.getItem(storageKey) ?? null;
  } catch {
    stored = null;
  }

  if (stored === "en" || stored === "es") {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : fallback;
}

function useBrowserLocale(fallback: Locale): Locale {
  return useSyncExternalStore(
    subscribeToLocaleSnapshot,
    () => getInitialLocale(fallback),
    () => fallback,
  );
}

export function LanguageProvider({
  children,
  initialLocale = "es",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const browserLocale = useBrowserLocale(initialLocale);
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);
  const locale = selectedLocale ?? browserLocale;

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      window.localStorage?.setItem(storageKey, locale);
    } catch {
      // Language still works through React state and the optional ?lang query.
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setSelectedLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
