import { createContext, useContext, useState, useCallback } from "react";
import { translations, Language, Translations } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("inzelsec-language");
    return (stored as Language) || "en";
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "pt" : "en";
      localStorage.setItem("inzelsec-language", newLang);
      return newLang;
    });
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
