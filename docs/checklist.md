# 체크리스트

## 환경 셋업
- [x] 사업장 정보 조사 (사업자등록증 + 네이버 플레이스)
- [x] 사진 자산 정리 (assets/)
- [x] 기획서 작성 (plan.md)
- [ ] Node/npm 버전 확인
- [ ] Vite + React + TS 프로젝트 초기화
- [ ] Tailwind v3 설치 및 설정
- [ ] Framer Motion 설치
- [ ] 폰트 연결 (Pretendard, Noto Serif KR)

## 디자인 시스템
- [ ] tailwind.config 색상 토큰 등록
- [ ] index.css에 폰트·CSS 변수 등록
- [ ] 공통 컨테이너·간격·radius 토큰

## 컴포넌트 구현
- [ ] `<Nav />` — sticky, 로고 + 메뉴 + 예약 CTA
- [ ] `<Hero />` — 풀스크린, 헤드라인, 패럴랙스
- [ ] `<Story />` — 할머니 앞마당 스토리 + 4가지 약속
- [ ] `<SignatureMenu />` — 마당 한판/반판/특수부위 (영웅 카드)
- [ ] `<FullMenu />` — 단품 + 사이드 그리드
- [ ] `<Reviews />` — 키워드 통계 + 실제 리뷰 슬라이더
- [ ] `<Visit />` — 주소·시간·지도·주차 안내
- [ ] `<Footer />` — 사업자 정보 + 인스타 + 전화

## 데이터
- [ ] `src/data/menu.ts` — 메뉴 데이터 (사진 경로 포함)
- [ ] `src/data/reviews.ts` — 네이버 리뷰 10건 (닉네임·날짜·본문)
- [ ] `src/data/store.ts` — 매장 정보 (주소·전화·SNS)

## 자산
- [ ] 사진 8장 `public/images/` 또는 `src/assets/`로 이동
- [ ] 사진 alt 텍스트 작성
- [ ] favicon 생성 (육마당 로고 또는 肉 한자)

## 반응형 / 접근성
- [ ] 모바일 (~640px) 레이아웃 점검
- [ ] 태블릿 (640~1024px) 점검
- [ ] 데스크탑 (1024px+) 점검
- [ ] 텍스트 대비 (WCAG AA)
- [ ] alt 누락 점검

## 빌드 / 검증
- [ ] `npm run build` 성공
- [ ] `npm run preview` 브라우저 확인
- [ ] 모든 이미지 로딩 확인
- [ ] 콘솔 에러 0개

## 배포
- [ ] `.gitignore` 작성 (node_modules, dist, .DS_Store)
- [ ] README.md 작성 (간단)
- [ ] git init + 초기 커밋
- [ ] GitHub public repo `yukmadang` 생성
- [ ] origin 등록 + push
- [ ] Cloudflare Pages 배포 가이드 문서 작성 (사용자가 직접 진행)

## 추가 (시간 여유 있을 경우)
- [ ] 페이지 로딩 애니메이션 (숯불 점화 모션)
- [ ] OG 태그 (카카오/페이스북 공유용 이미지)
- [ ] sitemap.xml + robots.txt
- [ ] 네이버 예약 외부 링크 연결
