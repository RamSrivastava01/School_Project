import { useEffect, useState } from "react";
import { LanguageContext } from "./languageContextValue";

export function LanguageProvider({ children }) {
   const [language, setLanguage] = useState(() => {
      return localStorage.getItem("language") || "en";
   });

   useEffect(() => {
      localStorage.setItem("language", language);
   }, [language]);

   const toggleLanguage = () => {
      setLanguage((prev) => (prev === "en" ? "hi" : "en"));
   };

   return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
         {children}
      </LanguageContext.Provider>
   );
}
