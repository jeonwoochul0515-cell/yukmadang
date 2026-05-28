// 인스타그램 추천 카드 3장 + 팔로우 CTA. 카드 모두 @6madang 메인으로 연결한다
import { motion } from 'framer-motion';
import { store } from '../data/store';
import { useLanguage } from '../i18n/LanguageContext';

const cards = [
  { image: '/images/madang-full.jpg', captionKey: 'cardCaption1' },
  { image: '/images/samdu.jpg', captionKey: 'cardCaption2' },
  { image: '/images/tonggalmaegi.jpg', captionKey: 'cardCaption3' },
] as const;

export function InstagramSection() {
  const { t } = useLanguage();
  const captionMap = {
    cardCaption1: t.insta.cardCaption1,
    cardCaption2: t.insta.cardCaption2,
    cardCaption3: t.insta.cardCaption3,
  };

  return (
    <section id="instagram" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-ember text-xs tracking-[0.3em] uppercase">{t.insta.kicker}</span>
            </div>
            <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
              {t.insta.title1}
              <br />
              {t.insta.title2}
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed">{t.insta.body}</p>
          </div>
          <a
            href={store.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start lg:self-auto rounded-full bg-ember px-7 py-3.5 text-charcoal font-medium hover:bg-ember-glow transition-colors whitespace-nowrap"
          >
            <InstagramIcon />
            {t.insta.followCta}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, idx) => (
            <motion.a
              key={c.captionKey}
              href={store.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-charcoal-700"
            >
              <img
                src={c.image}
                alt={captionMap[c.captionKey]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                <p className="text-hanji text-sm sm:text-base font-medium leading-snug">
                  {captionMap[c.captionKey]}
                </p>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal/80 backdrop-blur-sm border border-bone/20 text-ember group-hover:bg-ember group-hover:text-charcoal group-hover:border-ember transition-all">
                  <InstagramIcon size={16} />
                </span>
              </div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-charcoal/60 backdrop-blur-sm px-2.5 py-1 text-[10px] text-bone/80 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
                {t.insta.cardCta}
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-bone/40 tracking-wide">
          {store.contact.instagramHandle} · Instagram
        </p>
      </div>
    </section>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
