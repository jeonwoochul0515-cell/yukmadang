// 할머니 앞마당 스토리 + 4가지 약속을 비대칭 그리드로 보여주는 섹션
import { motion } from 'framer-motion';

const promises = [
  {
    no: '01',
    title: '당일도축',
    body: '국내산 돼지를 그날 받아 그날 손질합니다. 신선함이 첫 번째.',
  },
  {
    no: '02',
    title: '참숯 직화',
    body: '가스불 대신 참숯. 은은한 향이 고기 속까지 배어듭니다.',
  },
  {
    no: '03',
    title: '직접 구워드림',
    body: '직원이 곁에서 굽고 잘라 드립니다. 손은 가만히, 입은 계속.',
  },
  {
    no: '04',
    title: '셀프바 · 아이밥 무료',
    body: '반찬은 눈치 보지 말고. 미취학 아동은 공깃밥 무료.',
  },
];

const inView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: 'easeOut' as const },
};

export function Story() {
  return (
    <section id="story" className="relative bg-charcoal py-28 sm:py-40 overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] ember-glow opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <motion.div {...inView} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="text-ember text-xs tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h2 className="font-display font-black text-hanji text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tightest">
              앞마당의 정성,
              <br />
              그대로 옮겨왔습니다.
            </h2>
          </motion.div>

          <motion.div {...inView} transition={{ ...inView.transition, delay: 0.2 }} className="lg:col-span-7 space-y-6 text-lg text-bone/85 leading-[1.9] text-pretty">
            <p>
              어릴 적 할머니집 앞마당은 벌레도 많고 밥을 먹기도 불편한 공간이었습니다.
              그래도 손주들이 오면, 할머니는 어김없이 숯불을 피우셨죠.
            </p>
            <p>
              마당에서 구워 먹는 고기 한 점에는 손주가 좋아하는 모습을 보고 싶다는
              마음이 함께 담겨 있었습니다. 그 시간이 우리를 자라게 했습니다.
            </p>
            <p className="text-ember-glow">
              저희 육마당은 할머니의 그 정성을 그대로 옮겨오려 합니다.
              손님이 좋은 추억을 한 상 들고 나가실 수 있도록.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-600/40 rounded-2xl overflow-hidden border border-charcoal-600/40">
          {promises.map((p, idx) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-charcoal p-7 sm:p-10 hover:bg-charcoal-700/60 transition-colors"
            >
              <div className="text-ember/70 text-sm font-mono mb-4">{p.no}</div>
              <h3 className="font-display text-2xl text-hanji mb-3">{p.title}</h3>
              <p className="text-sm text-bone/70 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
