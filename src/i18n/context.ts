import { createContext, useContext } from "react";
import { DEFAULT_LANG, type Lang } from "./config";
import { ui } from "./ui";

export const LanguageContext = createContext<Lang>(DEFAULT_LANG);

/** Current language ("en" | "pt"). */
export const useLang = () => useContext(LanguageContext);

/** Interface text for the current language. */
export const useT = () => ui[useLang()];
