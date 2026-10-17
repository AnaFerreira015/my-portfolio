export const LANGS = ["en", "pt"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** Value for <html lang>, hreflang and lang attributes. */
export const HTML_LANG: Record<Lang, string> = {
  en: "en",
  pt: "pt-BR",
};

/** Text that is either shared by both languages or translated per language. */
export type Localized = string | Record<Lang, string>;

export const isLang = (value: unknown): value is Lang =>
  typeof value === "string" && (LANGS as readonly string[]).includes(value);

/** Picks the right translation. Plain strings are shared by both languages. */
export const tr = (value: Localized, lang: Lang): string =>
  typeof value === "string" ? value : value[lang];

const STORAGE_KEY = "lang";

export const getSavedLang = (): Lang | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return isLang(saved) ? saved : null;
  } catch {
    return null;
  }
};

export const saveLang = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The URL still holds the language.
  }
};

/** Saved choice first, then the browser language, then English. */
export const detectLang = (): Lang => {
  const saved = getSavedLang();
  if (saved) return saved;
  const browser = typeof navigator !== "undefined" ? navigator.language : "";
  return browser?.toLowerCase().startsWith("pt") ? "pt" : DEFAULT_LANG;
};
