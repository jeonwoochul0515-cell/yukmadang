// 육마당 메뉴 데이터 — 시그니처 세트와 단품, 사이드를 분리해 관리
export type MenuItem = {
  id: string;
  name: string;
  weight?: string;
  price: number;
  description?: string;
  badge?: string;
  image?: string;
  parts?: string[];
};

export const signatures: MenuItem[] = [
  {
    id: 'madang-full',
    name: '마당 한판',
    weight: '650g',
    price: 57000,
    parts: ['삼겹', '목살', '삼두박살', '등심덧살'],
    description: '4부위가 한 접시에. 마음 맞는 사람 여럿이서 이거 하나면 충분합니다.',
    badge: '대표 세트',
    image: '/images/madang-full.jpg',
  },
  {
    id: 'madang-half',
    name: '마당 반판',
    weight: '450g',
    price: 39000,
    parts: ['삼겹', '삼두박살', '등심덧살'],
    description: '두세 명이 다양한 부위를 부담 없이 즐기기 좋은 구성.',
    badge: '인기',
    image: '/images/madang-half.jpg',
  },
  {
    id: 'special-mix',
    name: '특수부위 모듬',
    weight: '450g',
    price: 39000,
    parts: ['삼두박살', '등심덧살', '통갈매기살'],
    description: '삼겹은 빼고 특수부위만. 고기 마니아의 선택.',
    badge: '특수부위 전문',
    image: '/images/special-mix.jpg',
  },
];

export const cuts: MenuItem[] = [
  {
    id: 'samdu',
    name: '삼두박살',
    weight: '120g',
    price: 10900,
    description: '육마당 특미. 당일도축된 국내산 돼지 특수부위.',
    image: '/images/samdu.jpg',
  },
  {
    id: 'deungsim-deot',
    name: '등심덧살',
    weight: '120g',
    price: 11900,
    description: '등심에 붙은 한정 부위. 쫄깃하고 담백한 식감.',
  },
  {
    id: 'tonggalmaegi',
    name: '통갈매기살',
    weight: '110g',
    price: 11900,
    description: '돼지 한 마리에 200g 남짓. 통째로 구워 잘라 드립니다.',
    image: '/images/tonggalmaegi.jpg',
  },
  {
    id: 'kkeop-hangjeong',
    name: '껍항정 (한정수량)',
    weight: '120g',
    price: 12900,
    description: '껍데기와 항정이 함께. 그날그날 한정 판매.',
  },
  {
    id: 'gabri',
    name: '산더미 가브리 (소금/양념)',
    weight: '150g',
    price: 9500,
    description: '얇게 민 가브리살, 참숯향이 가득 배도록.',
  },
  {
    id: 'samgyeop',
    name: '특삼겹',
    weight: '120g',
    price: 10900,
    description: '당일도축된 국내산 삼겹살.',
    image: '/images/samgyeop.jpg',
  },
  {
    id: 'samgyeop-fat',
    name: '고지방 특삼겹',
    weight: '120g',
    price: 10900,
    description: '사장님 원픽. 기름이 자글자글, 한 점에 입안 가득.',
    badge: '사장님 원픽',
    image: '/images/samgyeop-fat.jpg',
  },
  {
    id: 'moksal',
    name: '특목살',
    weight: '120g',
    price: 10900,
    description: '당일도축된 국내산 목살.',
    image: '/images/moksal.jpg',
  },
  {
    id: 'kkeopdegi',
    name: '돼지껍데기',
    price: 7900,
    description: '바삭한 식감, 한 잔 더 부르는 안주.',
  },
  {
    id: 'cheese',
    name: '구워먹는 치즈',
    price: 6900,
    description: '참숯 위에서 사르르 녹는 치즈. 아이도 좋아합니다.',
  },
];

export const sides: MenuItem[] = [
  {
    id: 'chon-doenjang',
    name: '촌된장찌개',
    price: 0,
    description: '시골 할머니 집에서 먹는 듯한 구수하고 깊은 맛. 리뷰 1순위 사이드.',
    badge: '리뷰 베스트',
  },
  {
    id: 'doenjang-sulbap',
    name: '된장술밥',
    price: 0,
    description: '식사 마무리로 한 그릇. 비울 때까지 멈출 수 없는.',
  },
  {
    id: 'bibim-naengmyeon',
    name: '비빔냉면',
    price: 0,
    description: '고기 사이사이 새콤하게.',
  },
  {
    id: 'mul-naengmyeon',
    name: '물냉면',
    price: 0,
    description: '시원한 육수로 입가심.',
  },
  {
    id: 'kimchi-jjigae',
    name: '김치찌개',
    price: 0,
    description: '잘 익은 김치로 끓여낸 진한 한 그릇.',
  },
];

export const formatPrice = (price: number): string =>
  price === 0 ? '' : `${price.toLocaleString('ko-KR')}원`;
