# 육마당 사상본점 · 홈페이지

부산 사상의 참숯 돼지구이 전문점 **육마당 사상본점**의 공식 브랜드 홈페이지.

> "어릴 적 할머니가 손주를 위해 앞마당에 숯불을 피우고 고기를 구워주던 정성."

## 기술 스택

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v3
- Framer Motion
- Cloudflare Pages 배포

## 개발

```bash
npm install
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
  components/   섹션 컴포넌트 (Nav, Hero, Story, Menu, Reviews, Visit, Footer)
  data/         매장·메뉴·리뷰 데이터
  index.css     Tailwind + 폰트
public/
  images/       메뉴·매장 사진
docs/
  plan.md       기획서
  checklist.md  작업 체크리스트
  context-notes.md  의사결정 노트
```

## 매장 정보

- **상호**: 육마당 사상본점
- **주소**: 부산광역시 사상구 사상로233번길 40, 1층
- **전화**: 0507-1386-4129
- **인스타그램**: [@6madang](https://www.instagram.com/6madang)
- **영업**: 매일 16:00 ~

## 배포

main 브랜치에 푸시되면 Cloudflare Pages가 자동으로 빌드·배포합니다.

- Build command: `npm run build`
- Build output: `dist`
- Node version: 20+
