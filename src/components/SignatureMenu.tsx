// 대표 세트 3종을 큰 사진과 함께 영웅 카드로 보여주는 섹션
import { motion } from 'framer-motion';
import { signatures, formatPrice } from '../data/menu';

export function SignatureMenu() {
  return (
    <section id="signature" className="relative bg-hanji text-ink py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="text-ember text-xs tracking-[0.3em] uppercase">Signature</span>
          </div>
          <h2 className="font-display font-black text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
            한 접시에 담은,
            <br />
            네 가지 부위의 이야기.
          </h2>
          <p className="mt-6 text-ink/70 text-lg leading-relaxed text-pretty">
            특수부위 전문점이라는 말은 가볍지 않습니다.
            매일 들여오는 부위 중에서, 그날 가장 좋은 것만 한 접시에 올립니다.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid lg:grid-cols-3 gap-8">
          {signatures.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: 'easeOut' }}
              className="group relative bg-charcoal text-hanji rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-700">
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.name} ${item.weight ?? ''}`}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
                {item.badge && (
                  <div className="absolute top-5 left-5 inline-flex items-center rounded-full bg-ember/95 text-charcoal text-xs font-medium px-3 py-1.5 tracking-wide">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="font-display text-3xl text-hanji">{item.name}</h3>
                  <span className="text-ember-glow text-sm font-mono">{item.weight}</span>
                </div>
                <p className="text-sm text-bone/75 leading-relaxed mb-6 text-pretty">
                  {item.description}
                </p>
                {item.parts && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.parts.map((part) => (
                      <span
                        key={part}
                        className="text-[11px] tracking-wide rounded-full border border-bone/20 px-2.5 py-1 text-bone/70"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto pt-5 border-t border-charcoal-600/60 flex items-end justify-between">
                  <span className="text-xs text-bone/50 tracking-widest">PRICE</span>
                  <span className="font-display text-3xl text-hanji">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ink/50">
          * 모든 메뉴는 당일도축 국내산 돼지로 준비합니다.
        </p>
      </div>
    </section>
  );
}
