// 상단 sticky 네비게이션 — 스크롤 시 배경이 채워지고 언어 토글이 함께 노출된다
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { store } from '../data/store';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGS, LANG_SHORT } from '../i18n/types';

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#story', label: t.nav.story },
    { href: '#signature', label: t.nav.signature },
    { href: '#menu', label: t.nav.menu },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#visit', label: t.nav.visit },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/85 backdrop-blur-md border-b border-charcoal-600/60'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 py-4">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display font-black text-2xl sm:text-3xl text-hanji tracking-tightest">
            육마당
          </span>
          <span className="font-display text-ember text-sm sm:text-base opacity-80 group-hover:opacity-100 transition">
            肉
          </span>
          <span className="hidden sm:inline ml-2 text-xs text-bone/60 tracking-widest">
            {t.nav.sasang}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone/80 hover:text-ember transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}

          <LangSwitcher current={lang} onSelect={setLang} />

          <a
            href={`tel:${store.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2 text-sm font-medium text-charcoal hover:bg-ember-glow transition-colors"
          >
            {t.nav.reservation}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <LangSwitcher current={lang} onSelect={setLang} compact />
          <a
            href={`tel:${store.contact.phone}`}
            className="text-sm text-ember font-medium"
          >
            {t.nav.reservation}
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function LangSwitcher({
  current,
  onSelect,
  compact = false,
}: {
  current: typeof LANGS[number];
  onSelect: (l: typeof LANGS[number]) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-bone/15 ${
        compact ? 'p-0.5 text-[10px]' : 'p-1 text-[11px]'
      }`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => {
        const active = l === current;
        return (
          <button
            key={l}
            type="button"
            onClick={() => onSelect(l)}
            aria-pressed={active}
            className={`${compact ? 'px-2 py-1' : 'px-2.5 py-1'} rounded-full font-mono tracking-wider transition-colors ${
              active
                ? 'bg-ember text-charcoal'
                : 'text-bone/60 hover:text-hanji'
            }`}
          >
            {LANG_SHORT[l]}
          </button>
        );
      })}
    </div>
  );
}
