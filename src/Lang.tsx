// context/Lang.tsx

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

const LanguageContext = createContext<{
  lang: Language;
  toggleLang: () => void;
} | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
