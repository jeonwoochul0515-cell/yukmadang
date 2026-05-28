// 푸터 — 사업자 정보와 SNS, 카피라이트
import { store } from '../data/store';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-600/40 py-14 text-bone/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display font-black text-2xl text-hanji">육마당</span>
              <span className="font-display text-ember">肉</span>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-line">{t.footer.tagline}</p>
          </div>
          <div>
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">{t.footer.contact}</p>
            <a href={`tel:${store.contact.phone}`} className="block text-sm hover:text-ember transition-colors">
              {store.contact.phone}
            </a>
            <a
              href={store.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover:text-ember transition-colors mt-1"
            >
              Instagram {store.contact.instagramHandle}
            </a>
          </div>
          <div>
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">{t.footer.address}</p>
            <p className="text-sm leading-relaxed">{store.address.line1}</p>
            <p className="text-xs mt-2">{store.transit.subway}</p>
          </div>
          <div>
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">{t.footer.business}</p>
            <p className="text-xs leading-relaxed">
              {t.footer.biz} · {store.fullName}
              <br />
              {t.footer.owner} · {store.business.owner}
              <br />
              {t.footer.license} · {store.business.licenseNumber}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-charcoal-600/40 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} 육마당 사상본점. {t.footer.rights}</p>
          <p>{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
