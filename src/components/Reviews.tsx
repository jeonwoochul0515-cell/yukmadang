// 네이버 실리뷰 10건과 키워드 통계로 신뢰를 만드는 섹션
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews, reviewKeywords, reviewStats } from '../data/reviews';
import { store } from '../data/store';

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section id="reviews" className="relative bg-hanji text-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-ember text-xs tracking-[0.3em] uppercase">Reviews</span>
            </div>
            <h2 className="font-display font-black text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
              "{reviewStats.summaryByNaver}"
            </h2>
            <p className="mt-6 text-ink/60 text-sm">
              — 네이버 플레이스 AI 요약
            </p>

            <div className="mt-10 flex items-baseline gap-6 pb-6 border-b border-ink/15">
              <div>
                <div className="font-display text-4xl text-ink">{reviewStats.visitorReviews}</div>
                <div className="text-xs text-ink/60 mt-1 tracking-wide">방문자 리뷰</div>
              </div>
              <div>
                <div className="font-display text-4xl text-ink">{reviewStats.blogReviews}</div>
                <div className="text-xs text-ink/60 mt-1 tracking-wide">블로그 리뷰</div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {reviewKeywords.slice(0, 6).map((k, idx) => {
                const max = reviewKeywords[0].count;
                const pct = (k.count / max) * 100;
                return (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-sm text-ink/80 w-44 flex-shrink-0">{k.label}</span>
                    <div className="flex-1 h-1.5 bg-ink/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.08 + 0.2, ease: 'easeOut' }}
                        className="h-full bg-ember"
                      />
                    </div>
                    <span className="text-xs font-mono text-ink/60 w-10 text-right">{k.count}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-charcoal text-hanji rounded-2xl p-8 sm:p-12 min-h-[420px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-ember text-5xl leading-none">"</span>
                <span className="text-xs font-mono text-bone/50">
                  {String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 flex flex-col"
                >
                  <p className="text-lg sm:text-xl leading-[1.85] text-bone/90 text-pretty flex-1">
                    {review.body}
                  </p>
                  <div className="mt-10 pt-6 border-t border-charcoal-600/60 flex items-center justify-between">
                    <div>
                      <div className="font-display text-hanji">{review.nickname}</div>
                      <div className="text-xs text-bone/50 mt-1 font-mono">{review.date}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={prev}
                        aria-label="이전 리뷰"
                        className="w-10 h-10 rounded-full border border-bone/20 hover:bg-bone/10 transition-colors flex items-center justify-center"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        aria-label="다음 리뷰"
                        className="w-10 h-10 rounded-full bg-ember text-charcoal hover:bg-ember-glow transition-colors flex items-center justify-center"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <a
              href={store.contact.naverPlace}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ember transition-colors"
            >
              네이버에서 343개 리뷰 모두 보기
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
