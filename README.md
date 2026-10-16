# TRIBANT 브랜드 홈페이지

프로선수 송규범이 개발하는 당구 큐 팁 관리 브랜드의 모바일 우선 홈페이지입니다.

## 실행

`dist/index.html`을 브라우저에서 열면 됩니다. 별도 설치가 필요 없습니다.

## 수정

- 회사 정보, 예정 가격, 사진 경로: `site-data.json`
- 문구와 구성: `build.py` 수정 후 `python build.py`
- 디자인: `dist/style.css`
- 동작: `dist/app.js`
- 확인: `python check.py`

첫 화면과 케이스 소개에는 실제 초크케이스 시제품 사진을 사용합니다. 사진을 누르면 확대할 수 있습니다.

현재 출시 준비 중이며 가격·구성은 예정입니다. 신청 폼은 입력 검증만 제공하고 저장·전송하지 않습니다. 검색 수집을 허용하는 index,follow 설정이 적용되어 있습니다. GitHub Pages 공개 파일은 docs/이며, 메인과 정율 협업 글은 docs/sitemap.xml에 등록되어 있습니다.
