// 단품과 사이드 메뉴를 두 칸 그리드로 보여주는 섹션
import { motion } from 'framer-motion';
import { cuts, sides, formatPrice, type MenuItem } from '../data/menu';
import { useLanguage } from '../i18n/LanguageContext';

function Row({ item }: { item: MenuItem }) {
  const { lang, pick } = useLanguage();
  return (
    <div className="group flex items-start gap-5 py-5 border-b border-charcoal-600/40">
      {item.image ? (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-charcoal-700">
          <img
            src={item.image}
            alt={pick(item.name)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-charcoal-700/50 flex-shrink-0 flex items-center justify-center">
          <span className="font-display text-ember/40 text-2xl">肉</span>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <div className="flex items-baseline gap-3">
            <h4 className="font-display text-lg sm:text-xl text-hanji">{pick(item.name)}</h4>
            {item.weight && (
              <span className="text-xs font-mono text-bone/50">{item.weight}</span>
            )}
            {item.badge && (
              <span className="inline-flex items-center rounded-full bg-ember/15 text-ember text-[10px] px-2 py-0.5 tracking-wide">
                {pick(item.badge)}
              </span>
            )}
          </div>
          {item.price > 0 && (
            <span className="text-ember-glow text-base sm:text-lg font-medium">
              {formatPrice(item.price, lang)}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-sm text-bone/65 leading-relaxed text-pretty">
            {pick(item.description)}
          </p>
        )}
      </div>
    </div>
  );
}

export function FullMenu() {
  const { t } = useLanguage();
  return (
    <section id="menu" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] ember-glow opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="text-ember text-xs tracking-[0.3em] uppercase">{t.menu.kicker}</span>
          </div>
          <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
            {t.menu.title1}
            <br />
            {t.menu.title2}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl text-ember-glow mb-2">{t.menu.cuts}</h3>
            <p className="text-xs text-bone/50 mb-2">{t.menu.cutsBody}</p>
            <div>
              {cuts.map((item) => (
                <Row key={item.id} item={item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl text-ember-glow mb-2">{t.menu.sides}</h3>
            <p className="text-xs text-bone/50 mb-2">{t.menu.sidesBody}</p>
            <div>
              {sides.map((item) => (
                <Row key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-charcoal-600/60 bg-charcoal-700/40 p-6">
              <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">{t.menu.couponLabel}</p>
              <p className="text-hanji font-medium mb-2">{t.menu.couponTitle}</p>
              <p className="text-sm text-bone/70 leading-relaxed">{t.menu.couponBody}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
