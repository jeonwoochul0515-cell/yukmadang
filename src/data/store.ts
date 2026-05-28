// 육마당 사상본점의 매장 기본 정보를 한곳에 모은 데이터
export const store = {
  name: '육마당',
  branch: '사상본점',
  fullName: '육마당 사상본점',
  tagline: '참숯 돼지구이 전문점',
  hanja: '肉',
  story:
    '어릴 적 할머니집 앞마당은 벌레도 많고 밥을 먹기도 불편한 공간이었지만, 손주들을 위해 숯불을 피우고 고기를 구워주던 할머니의 정성이 더해져 좋은 추억이 있는 공간이었습니다. 저희 육마당은 할머니처럼 정성을 다해 고기를 준비하고, 손님들이 좋은 추억을 가지고 나갈 수 있도록 노력하겠습니다.',
  address: {
    line1: '부산광역시 사상구 사상로233번길 40, 1층',
    region: '괘법동',
    postal: '46977',
  },
  transit: {
    subway: '부산김해선 사상역 5번 출구 도보 447m',
    car: '지도 앱에 "사상 육마당" 검색',
    parking: '홀인원골프연습장 주차장 (테이블당 차 1대 1시간 무료, 추가 시간당 3,000원, 최대 15,000원)',
  },
  hours: {
    open: '16:00',
    note: '저녁 영업 · 라스트오더 22:30 (시즌별 상이)',
  },
  contact: {
    phone: '0507-1386-4129',
    instagram: 'https://www.instagram.com/6madang',
    instagramHandle: '@6madang',
    naverPlace: 'https://map.naver.com/p/search/%EC%9C%A1%EB%A7%88%EB%8B%B9%20%EC%82%AC%EC%83%81%EB%B3%B8%EC%A0%90',
  },
  facilities: [
    '단체 이용 가능 (최대 46명)',
    '예약 가능',
    '무선 인터넷',
    '남/녀 화장실 구분',
    '유아의자',
    '대기공간',
    '주차 가능',
    '미취학 아동 애기밥 무료',
  ],
  business: {
    owner: '조영수',
    licenseNumber: '737-24-01918',
    openedAt: '2024.05.01',
    renewedAt: '2025.11.13',
  },
} as const;
