// 사이트 전역 언어 상태를 관리하는 Context Provider — localStorage에 선택 저장
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Lang, LangString } from './types';
import { translations } from './translations';

type TranslationDict = typeof translations.ko;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationDict;
  pick: (value: LangString) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'yukmadang.lang';

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'ko';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ko' || stored === 'en' || stored === 'ja') return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith('ja')) return 'ja';
  if (nav.startsWith('en')) return 'en';
  return 'ko';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitial());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      pick: (v: LangString) => v[lang] ?? v.ko,
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
