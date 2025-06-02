import { createContext, useState } from "react";

export let LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: language,
        setNewLanguage: (newLanguage) => setLanguage(newLanguage),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
