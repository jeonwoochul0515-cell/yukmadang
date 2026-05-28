// 방문 정보 — 주소, 영업시간, 주차, 편의시설, 지도 임베드를 한 화면에
import { motion } from 'framer-motion';
import { store } from '../data/store';

const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent('육마당 사상본점')}`;

export function Visit() {
  return (
    <section id="visit" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] ember-glow opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="text-ember text-xs tracking-[0.3em] uppercase">Visit</span>
          </div>
          <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
            오늘 저녁 4시,
            <br />
            육마당에서 만나요.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden bg-charcoal-700/40 border border-charcoal-600/40 aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
          >
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 via-charcoal to-charcoal-700">
                <div className="absolute inset-0 grain opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <span className="font-display text-7xl text-ember/30 mb-4">肉</span>
                  <p className="font-display text-2xl text-hanji mb-2">
                    {store.address.line1}
                  </p>
                  <p className="text-sm text-bone/60 mb-8">{store.transit.subway}</p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-hanji/30 px-6 py-3 text-sm text-hanji group-hover:bg-ember group-hover:text-charcoal group-hover:border-ember transition-all">
                    네이버 지도로 길찾기 <span aria-hidden>↗</span>
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            <Info label="영업시간">
              <p className="text-2xl font-display text-hanji">매일 16:00 ~</p>
              <p className="text-sm text-bone/65 mt-1">{store.hours.note}</p>
            </Info>

            <Info label="전화 · 예약">
              <a
                href={`tel:${store.contact.phone}`}
                className="text-2xl font-display text-ember-glow hover:text-ember transition-colors block"
              >
                {store.contact.phone}
              </a>
              <p className="text-sm text-bone/65 mt-1">
                단체 최대 46명 가능. 주말 6시 이후 만석, 미리 전화 주세요.
              </p>
            </Info>

            <Info label="주차">
              <p className="text-sm text-bone/80 leading-relaxed">
                {store.transit.parking}
              </p>
            </Info>

            <Info label="편의 시설">
              <div className="flex flex-wrap gap-2 mt-2">
                {store.facilities.map((f) => (
                  <span
                    key={f}
                    className="text-xs rounded-full border border-bone/20 px-3 py-1.5 text-bone/75"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Info>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-ember/40 pl-5">
      <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">{label}</p>
      {children}
    </div>
  );
}
