// 방문 정보 — 주소, 영업시간, 주차, 편의시설, 지도 임베드를 한 화면에
import { motion } from 'framer-motion';
import { store } from '../data/store';
import { useLanguage } from '../i18n/LanguageContext';

const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent('육마당 사상본점')}`;
const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent('부산광역시 사상구 사상로233번길 40')}&z=17&output=embed`;

export function Visit() {
  const { t } = useLanguage();
  return (
    <section id="visit" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] ember-glow opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="text-ember text-xs tracking-[0.3em] uppercase">{t.visit.kicker}</span>
          </div>
          <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tightest">
            {t.visit.title1}
            <br />
            {t.visit.title2}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-charcoal-600/40 aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-charcoal-700/40"
          >
            <iframe
              src={googleMapsEmbed}
              title="육마당 사상본점 위치"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-110"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[360px] pointer-events-auto">
              <div className="rounded-xl bg-charcoal/85 backdrop-blur-md border border-charcoal-600/60 p-4 sm:p-5">
                <p className="font-display text-base sm:text-lg text-hanji leading-snug mb-1">
                  {store.address.line1}
                </p>
                <p className="text-xs text-bone/60 mb-3">{store.transit.subway}</p>
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember text-charcoal text-xs font-medium px-4 py-2 hover:bg-ember-glow transition-colors"
                >
                  {t.visit.findMap}
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-8"
          >
            <Info label={t.visit.hours}>
              <p className="text-2xl font-display text-hanji">{t.visit.hoursValue}</p>
              <p className="text-sm text-bone/65 mt-1">{t.visit.hoursNote}</p>
            </Info>

            <Info label={t.visit.phone}>
              <a
                href={`tel:${store.contact.phone}`}
                className="text-2xl font-display text-ember-glow hover:text-ember transition-colors block"
              >
                {store.contact.phone}
              </a>
              <p className="text-sm text-bone/65 mt-1">{t.visit.phoneNote}</p>
            </Info>

            <Info label={t.visit.parking}>
              <p className="text-sm text-bone/80 leading-relaxed">{t.visit.parkingNote}</p>
            </Info>

            <Info label={t.visit.facilities}>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.facilities.map((f) => (
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
