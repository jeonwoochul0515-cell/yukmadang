// 메뉴 데이터 — 메뉴 이름과 설명은 한국어·영어·일본어 객체로 보관해 다국어 노출이 가능하다
import type { LangString } from '../i18n/types';

export type MenuItem = {
  id: string;
  name: LangString;
  weight?: string;
  price: number;
  description?: LangString;
  badge?: LangString;
  image?: string;
  parts?: LangString[];
};

const sm = (ko: string, en: string, ja: string): LangString => ({ ko, en, ja });

const PARTS = {
  samgyeop: sm('삼겹', 'Pork Belly', '三枚肉'),
  moksal: sm('목살', 'Pork Neck', '肩ロース'),
  samdu: sm('삼두박살', 'Shoulder Top', 'サムドゥパクサル'),
  deungsim: sm('등심덧살', 'Loin Cap', 'ロースカブリ'),
  tonggalmaegi: sm('통갈매기살', 'Whole Diaphragm', 'ハラミ丸'),
};

export const signatures: MenuItem[] = [
  {
    id: 'madang-full',
    name: sm('마당 한판', 'Madang Set · Whole', 'マダン定食・大'),
    weight: '650g',
    price: 57000,
    parts: [PARTS.samgyeop, PARTS.moksal, PARTS.samdu, PARTS.deungsim],
    description: sm(
      '4부위가 한 접시에. 마음 맞는 사람 여럿이서 이거 하나면 충분합니다.',
      'Four cuts on one plate. Enough for a happy table of friends or family.',
      '4つの部位を一皿に。親しい人数名であれば、これひとつで満足です。',
    ),
    badge: sm('대표 세트', 'Signature Set', '看板セット'),
    image: '/images/madang-full.jpg',
  },
  {
    id: 'madang-half',
    name: sm('마당 반판', 'Madang Set · Half', 'マダン定食・小'),
    weight: '450g',
    price: 39000,
    parts: [PARTS.samgyeop, PARTS.samdu, PARTS.deungsim],
    description: sm(
      '두세 명이 다양한 부위를 부담 없이 즐기기 좋은 구성.',
      'A balanced mix for two or three diners.',
      '2〜3名で色々な部位を気軽に楽しめる構成。',
    ),
    badge: sm('인기', 'Popular', '人気'),
    image: '/images/madang-half.jpg',
  },
  {
    id: 'special-mix',
    name: sm('특수부위 모듬', 'Special Cuts Mix', '希少部位盛合せ'),
    weight: '450g',
    price: 39000,
    parts: [PARTS.samdu, PARTS.deungsim, PARTS.tonggalmaegi],
    description: sm(
      '삼겹은 빼고 특수부위만. 고기 마니아의 선택.',
      'No belly — only special cuts. For the true pork enthusiast.',
      '三枚肉抜き、希少部位だけ。お肉好きのための一皿。',
    ),
    badge: sm('특수부위 전문', 'Specialty', '希少部位専門'),
    image: '/images/special-mix.jpg',
  },
];

export const cuts: MenuItem[] = [
  {
    id: 'samdu',
    name: sm('삼두박살', 'Shoulder Top (Samdubaksal)', 'サムドゥパクサル'),
    weight: '120g',
    price: 10900,
    description: sm(
      '육마당 특미. 당일도축된 국내산 돼지 특수부위.',
      "Yukmadang's signature cut. Same-day butchered Korean pork.",
      '육마당（ユクマダン）一押し。国産豚の希少部位、当日仕入れ。',
    ),
    image: '/images/samdu.jpg',
  },
  {
    id: 'deungsim-deot',
    name: sm('등심덧살', 'Loin Cap', 'ロースカブリ'),
    weight: '120g',
    price: 11900,
    description: sm(
      '등심에 붙은 한정 부위. 쫄깃하고 담백한 식감.',
      'A limited cut clinging to the loin. Chewy yet clean.',
      'ロースに付くわずかな部位。歯ごたえと淡白さが共存。',
    ),
  },
  {
    id: 'tonggalmaegi',
    name: sm('통갈매기살', 'Whole Diaphragm', 'ハラミ丸ごと'),
    weight: '110g',
    price: 11900,
    description: sm(
      '돼지 한 마리에 200g 남짓. 통째로 구워 잘라 드립니다.',
      'Only ~200g per pig. Grilled whole, then sliced for you.',
      '豚一頭から約200g。丸ごと焼いて、切り分けてお出しします。',
    ),
    image: '/images/tonggalmaegi.jpg',
  },
  {
    id: 'kkeop-hangjeong',
    name: sm('껍항정 (한정수량)', 'Pork Jowl with Skin (Limited)', '皮付き肩バラ（数量限定）'),
    weight: '120g',
    price: 12900,
    description: sm(
      '껍데기와 항정이 함께. 그날그날 한정 판매.',
      'Skin and jowl together. Daily limited quantity.',
      '皮と肩バラを一緒に。毎日数量限定。',
    ),
  },
  {
    id: 'gabri',
    name: sm('산더미 가브리 (소금/양념)', 'Loin Crown — Salt or Marinade', 'カブリ（塩/たれ）山盛り'),
    weight: '150g',
    price: 9500,
    description: sm(
      '얇게 민 가브리살, 참숯향이 가득 배도록.',
      'Thinly shaved crown of loin, ready to soak in charcoal smoke.',
      '薄くスライスしたカブリ。炭の香りをまといます。',
    ),
  },
  {
    id: 'samgyeop',
    name: sm('특삼겹', 'Premium Pork Belly', '特上三枚肉'),
    weight: '120g',
    price: 10900,
    description: sm(
      '당일도축된 국내산 삼겹살.',
      'Same-day butchered Korean pork belly.',
      '当日仕込みの国産三枚肉。',
    ),
    image: '/images/samgyeop.jpg',
  },
  {
    id: 'samgyeop-fat',
    name: sm('고지방 특삼겹', 'High-Fat Premium Belly', '脂多め特上三枚肉'),
    weight: '120g',
    price: 10900,
    description: sm(
      '사장님 원픽. 기름이 자글자글, 한 점에 입안 가득.',
      "The owner's pick. Juices crackle on the charcoal, one bite fills the mouth.",
      '店主一押し。炭の上で脂がじゅわっ、一口で口いっぱい。',
    ),
    badge: sm('사장님 원픽', "Owner's Pick", '店主のおすすめ'),
    image: '/images/samgyeop-fat.jpg',
  },
  {
    id: 'moksal',
    name: sm('특목살', 'Premium Pork Neck', '特上肩ロース'),
    weight: '120g',
    price: 10900,
    description: sm(
      '당일도축된 국내산 목살.',
      'Same-day butchered Korean pork neck.',
      '当日仕込みの国産肩ロース。',
    ),
    image: '/images/moksal.jpg',
  },
  {
    id: 'kkeopdegi',
    name: sm('돼지껍데기', 'Pork Skin', '豚皮'),
    price: 7900,
    description: sm(
      '바삭한 식감, 한 잔 더 부르는 안주.',
      'Crispy bite — a snack that asks for one more drink.',
      'パリッとした食感、もう一杯が進むおつまみ。',
    ),
  },
  {
    id: 'cheese',
    name: sm('구워먹는 치즈', 'Charcoal Cheese', '焼きチーズ'),
    price: 6900,
    description: sm(
      '참숯 위에서 사르르 녹는 치즈. 아이도 좋아합니다.',
      'Cheese that melts gently over charcoal. Kids love it.',
      '炭の上でとろけるチーズ。お子様にも人気。',
    ),
  },
];

export const sides: MenuItem[] = [
  {
    id: 'chon-doenjang',
    name: sm('촌된장찌개', 'Country Soybean Stew', '田舎味噌チゲ'),
    price: 0,
    description: sm(
      '시골 할머니 집에서 먹는 듯한 구수하고 깊은 맛. 리뷰 1순위 사이드.',
      "A deep, country-grandma soybean stew. Reviewers' #1 side.",
      'おばあちゃんの家のような、深い味噌の旨み。レビュー1位のサイド。',
    ),
    badge: sm('리뷰 베스트', "Reviewers' Pick", 'レビュー1位'),
  },
  {
    id: 'doenjang-sulbap',
    name: sm('된장술밥', 'Soybean Stew Rice with Soju', '味噌焼酎ご飯'),
    price: 0,
    description: sm(
      '식사 마무리로 한 그릇. 비울 때까지 멈출 수 없는.',
      'A bowl to finish the meal — and it never lasts long.',
      'しめの一杯。空になるまで止まりません。',
    ),
  },
  {
    id: 'bibim-naengmyeon',
    name: sm('비빔냉면', 'Spicy Cold Noodles', 'ビビン冷麺'),
    price: 0,
    description: sm(
      '고기 사이사이 새콤하게.',
      'Tangy bite between rounds of pork.',
      'お肉の合間に、爽やかな酸味を。',
    ),
  },
  {
    id: 'mul-naengmyeon',
    name: sm('물냉면', 'Cold Buckwheat Noodles', '水冷麺'),
    price: 0,
    description: sm(
      '시원한 육수로 입가심.',
      'A cold, clear broth to refresh the palate.',
      '冷たいスープで口直し。',
    ),
  },
  {
    id: 'kimchi-jjigae',
    name: sm('김치찌개', 'Kimchi Stew', 'キムチチゲ'),
    price: 0,
    description: sm(
      '잘 익은 김치로 끓여낸 진한 한 그릇.',
      'A rich bowl simmered with well-aged kimchi.',
      'よく熟成したキムチで仕上げる濃厚な一品。',
    ),
  },
];

export const formatPrice = (price: number, lang: 'ko' | 'en' | 'ja'): string => {
  if (price === 0) return '';
  if (lang === 'en') return `KRW ${price.toLocaleString('en-US')}`;
  if (lang === 'ja') return `${price.toLocaleString('ja-JP')}ウォン`;
  return `${price.toLocaleString('ko-KR')}원`;
};
