// 할머니 앞마당 스토리 + 4가지 약속을 비대칭 그리드로 보여주는 섹션
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const inView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' as const },
};

export function Story() {
  const { t } = useLanguage();
  const promises = t.story.promises;

  return (
    <section id="story" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] ember-glow opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <motion.div {...inView} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-ember text-xs tracking-[0.3em] uppercase">{t.story.kicker}</span>
            </div>
            <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tightest">
              {t.story.title1}
              <br />
              {t.story.title2}
            </h2>
          </motion.div>

          <motion.div {...inView} transition={{ ...inView.transition, delay: 0.2 }} className="lg:col-span-7 space-y-6 text-lg text-bone/85 leading-[1.9] text-pretty">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
            <p className="text-ember-glow">{t.story.p3}</p>
          </motion.div>
        </div>

        <div className="mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-600/40 rounded-2xl overflow-hidden border border-charcoal-600/40">
          {promises.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-charcoal p-7 sm:p-10 hover:bg-charcoal-700/60 transition-colors"
            >
              <div className="text-ember/70 text-sm font-mono mb-4">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-2xl text-hanji mb-3">{p.title}</h3>
              <p className="text-sm text-bone/70 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
