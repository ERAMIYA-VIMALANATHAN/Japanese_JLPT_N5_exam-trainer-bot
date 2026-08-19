import React, { createContext, useContext, useState, useEffect } from 'react';

export type ExplanationLang = 'english' | 'tamil' | 'both';
export type RomajiMode = 'always' | 'intro-only' | 'hidden';

interface LanguageContextType {
  lang: ExplanationLang;
  setLang: (lang: ExplanationLang) => void;
  romajiMode: RomajiMode;
  setRomajiMode: (mode: RomajiMode) => void;
  showLangSelector: boolean;
  setShowLangSelector: (show: boolean) => void;
  getText: (en: string, ta: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<ExplanationLang>(() => {
    return (localStorage.getItem('sensei_lang') as ExplanationLang) || 'both';
  });
  const [romajiMode, setRomajiModeState] = useState<RomajiMode>(() => {
    return (localStorage.getItem('sensei_romaji') as RomajiMode) || 'intro-only';
  });
  const [showLangSelector, setShowLangSelector] = useState<boolean>(false);

  const setLang = (newLang: ExplanationLang) => {
    setLangState(newLang);
    localStorage.setItem('sensei_lang', newLang);
  };

  const setRomajiMode = (newMode: RomajiMode) => {
    setRomajiModeState(newMode);
    localStorage.setItem('sensei_romaji', newMode);
  };

  const getText = (en: string, ta: string): string => {
    if (lang === 'english') return en;
    if (lang === 'tamil') return ta || en;
    // 'both'
    if (!ta || ta === en) return en;
    return `${en}\n(${ta})`;
  };

  return (
    <LanguageContext.Provider value={{
      lang,
      setLang,
      romajiMode,
      setRomajiMode,
      showLangSelector,
      setShowLangSelector,
      getText
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
