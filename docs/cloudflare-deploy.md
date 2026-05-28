# Cloudflare Pages 배포 가이드

육마당 홈페이지를 Cloudflare Pages에 무료로 올리고, 이후 main 브랜치에 푸시할 때마다 자동 배포되도록 연결한다.

## 1단계 — Cloudflare 계정 준비

이미 계정이 있다면 건너뛴다. 없다면 [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) 에서 무료 가입.

## 2단계 — Pages 프로젝트 생성

1. [Cloudflare 대시보드](https://dash.cloudflare.com/) 로그인
2. 좌측 사이드바 → **Workers & Pages** 클릭
3. 우측 상단 **Create application** → **Pages** 탭 → **Connect to Git**

## 3단계 — GitHub 연결

1. **GitHub** 선택 → 처음이면 인증 팝업이 뜬다. **Authorize Cloudflare**
2. **Install Cloudflare Pages** 화면에서 권한 부여
   - **Only select repositories** → `yukmadang` 선택 (전체 권한보다 안전)
3. 돌아온 화면에서 `jeonwoochul0515-cell/yukmadang` 선택 → **Begin setup**

## 4단계 — 빌드 설정

다음과 같이 입력한다.

| 항목 | 값 |
|---|---|
| **Project name** | `yukmadang` (배포 주소가 `yukmadang.pages.dev`가 된다) |
| **Production branch** | `main` |
| **Framework preset** | `Vite` (자동 감지됨) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory (advanced)** | 비워두기 |

### 환경 변수 (Environment variables)

**Production**에 다음 한 줄 추가.

| Name | Value |
|---|---|
| `NODE_VERSION` | `20` |

이걸 안 넣으면 기본 Node 18로 빌드되어 Vite 8과 충돌할 수 있다.

## 5단계 — Save and Deploy

**Save and Deploy** 버튼을 누른다. 약 1~2분이면 빌드가 끝난다.

배포 성공하면 자동으로 다음 URL이 발급된다.

```
https://yukmadang.pages.dev
```

## 6단계 — 이후 자동 배포

이제 로컬에서 코드를 수정한 뒤 다음 명령을 실행하면, Cloudflare가 자동으로 새 버전을 빌드해 배포한다.

```bash
git add -A
git commit -m "변경 내용"
git push
```

## (선택) 7단계 — 커스텀 도메인 연결

`yukmadang.com` 같은 자체 도메인을 쓰고 싶다면.

1. 도메인 구매 (가비아·후이즈·Cloudflare Registrar 등)
2. Pages 프로젝트 → **Custom domains** → **Set up a custom domain**
3. 안내에 따라 DNS 레코드 추가 (Cloudflare에서 구매했다면 클릭 한 번)
4. 잠시 후 HTTPS 자동 발급 완료

## 배포 후 점검 체크리스트

- [ ] `yukmadang.pages.dev` 접속 — 첫 화면 사진이 보이는가
- [ ] 모바일에서 접속 — 레이아웃이 무너지지 않는가
- [ ] 메뉴 사진 10장 모두 표시되는가
- [ ] "예약 전화" 버튼 클릭 — 전화 앱이 뜨는가
- [ ] "네이버 지도로 길찾기" 클릭 — 네이버 지도로 잘 이동하는가
- [ ] 리뷰 슬라이더 좌우 화살표 동작하는가
- [ ] 인스타그램 링크가 `@6madang` 으로 잘 가는가

## 문제 해결

- **빌드 실패: "Module not found"** → Cloudflare에서 `NODE_VERSION=20` 환경변수 추가됐는지 확인
- **사진 404** → `/images/...` 경로가 빌드 결과 `dist/images/`로 잘 복사됐는지 로컬 `npm run build` 후 확인
- **한글이 깨짐** → `index.html`의 `<html lang="ko">` 확인 (이미 적용됨)
