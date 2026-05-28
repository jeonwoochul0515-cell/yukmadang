// 푸터 — 사업자 정보와 SNS, 카피라이트
import { store } from '../data/store';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-600/40 py-14 text-bone/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display font-black text-2xl text-hanji">육마당</span>
              <span className="font-display text-ember">肉</span>
            </div>
            <p className="text-sm leading-relaxed">
              참숯 돼지구이 전문점.
              <br />
              할머니의 앞마당을 그대로 옮겨, 부산 사상에서.
            </p>
          </div>
          <div>
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">Contact</p>
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
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">Address</p>
            <p className="text-sm leading-relaxed">{store.address.line1}</p>
            <p className="text-xs mt-2">{store.transit.subway}</p>
          </div>
          <div>
            <p className="text-xs text-ember tracking-[0.2em] uppercase mb-3">Business</p>
            <p className="text-xs leading-relaxed">
              상호 · {store.fullName}
              <br />
              대표 · {store.business.owner}
              <br />
              사업자 · {store.business.licenseNumber}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-charcoal-600/40 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} 육마당 사상본점. All rights reserved.</p>
          <p>Designed with 정성 in Sasang.</p>
        </div>
      </div>
    </footer>
  );
}
