import { useContext } from "react";
import { LanguageContext } from "./languageContextValue";

export function useLanguage() {
   return useContext(LanguageContext);
}
