// 상단 sticky 네비게이션 — 스크롤 시 배경이 채워지는 인터랙션
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { store } from '../data/store';

const links = [
  { href: '#story', label: '이야기' },
  { href: '#signature', label: '대표 메뉴' },
  { href: '#menu', label: '전체 메뉴' },
  { href: '#reviews', label: '리뷰' },
  { href: '#visit', label: '오시는 길' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            SASANG
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone/80 hover:text-ember transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${store.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2 text-sm font-medium text-charcoal hover:bg-ember-glow transition-colors"
          >
            예약 전화
          </a>
        </nav>
        <a
          href={`tel:${store.contact.phone}`}
          className="md:hidden text-sm text-ember font-medium"
        >
          예약 전화
        </a>
      </div>
    </motion.header>
  );
}
