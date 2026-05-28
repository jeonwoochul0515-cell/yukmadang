// 다국어 지원에 사용되는 공통 타입 정의
export type Lang = 'ko' | 'en' | 'ja';

export const LANGS: Lang[] = ['ko', 'en', 'ja'];

export const LANG_LABEL: Record<Lang, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
};

export const LANG_SHORT: Record<Lang, string> = {
  ko: 'KO',
  en: 'EN',
  ja: 'JA',
};

export type LangString = Record<Lang, string>;
