import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
   // 1️⃣ Read language from localStorage OR default to English
   const [language, setLanguage] = useState(() => {
      return localStorage.getItem("language") || "en";
   });

   // 2️⃣ Save language to localStorage whenever it changes
   useEffect(() => {
      localStorage.setItem("language", language);
   }, [language]);

   // 3️⃣ Toggle language
   const toggleLanguage = () => {
      setLanguage((prev) => (prev === "en" ? "hi" : "en"));
   };

   return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
         {children}
      </LanguageContext.Provider>
   );
}

export function useLanguage() {
   return useContext(LanguageContext);
}
