// 첫 화면 풀스크린 히어로 — 음식 사진을 배경으로 강력한 첫 인상을 만든다
import { motion } from 'framer-motion';
import { store } from '../data/store';

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-table.jpg"
          alt="육마당 마당 한판과 촌된장찌개가 함께 차려진 테이블"
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/40 to-charcoal/95" />
        <div className="absolute inset-0 grain mix-blend-overlay opacity-40 pointer-events-none" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] ember-glow animate-ember-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 pb-16 sm:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-ember" />
              <span className="text-ember text-xs sm:text-sm tracking-[0.3em] uppercase">
                Charcoal · Pork · Sasang
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
              className="font-display font-black text-hanji text-balance tracking-tightest leading-[1.05] text-[clamp(2.5rem,7vw,5.5rem)]"
            >
              할머니의 앞마당,
              <br />
              <span className="text-ember-glow">참숯 위에 정성을 굽다.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1.2, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-bone/80 text-base sm:text-lg leading-relaxed text-pretty"
            >
              당일도축 국내산 돼지의 특수부위만 골라, 직원이 직접 구워드립니다.
              부산 사상, 16시에 불을 피웁니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1.0, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#signature"
                className="inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-charcoal font-medium hover:bg-ember-glow transition-colors"
              >
                대표 메뉴 보기
                <span aria-hidden>→</span>
              </a>
              <a
                href={`tel:${store.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-hanji/30 px-7 py-3.5 text-hanji hover:bg-hanji/10 transition-colors"
              >
                예약 전화 · {store.contact.phone}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/50 text-xs tracking-widest"
        >
          <span>SCROLL</span>
          <span className="h-8 w-px bg-bone/40 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
