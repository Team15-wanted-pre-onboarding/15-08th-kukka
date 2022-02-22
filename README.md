# 📝 퍼포먼스바이 기업 과제
## 1. 💁 프로젝트 소개

- 주제 : 4주차 니콘내콘 프로젝트
- 기간 : 22.02.21 ~ 22.02.23

---

## 2. 🛠️ 기술 스택

<p align="center">
<img alt="html" src="[https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)" />
<img alt="css3" src = "[https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)" />
<img alt="JavaScript" src="[https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)" />
</p>

---

## 3. 👋🏻 팀원 소개

|조은총|최병현|조용우|
|----|---|---|
|<img width="200px" src='https://avatars.githubusercontent.com/u/66837741?v=4'/>|<img width="200px" src="https://avatars.githubusercontent.com/u/65222200?v=4"/>|<img width="200px" src='https://avatars.githubusercontent.com/u/89348550?v=4'>|


---

## 4. 🔗 배포 링크

[배포 링크 바로가기](https://gallant-visvesvaraya-11f7e2.netlify.app) 

---

## 5. 📄 기능 목록 명세

### 1. 기능 분배

### 1) Nav/ImageView(조은총)

- Image 화살표 클릭시 image change
- 네빙게이션 하단 z-index표현을 위한 그림자 효과

### 2) 상품 상세 페이지(최병현)

- webpack development/production 두 가지 버전으로 빌드 초기 세팅
- iframe 태그를 사용하여 유투브 영상 링크
- banner view pagination slider 기능 구현

### 3) Footer/Pop-up/전체 레이아웃(조용우)

- 모바일, 테블릿 반응형을 고려한 바닥글 레이아웃
- sns 아이콘 클릭 시 새 창으로 이동
- 새 페이지 이동 시 display를 이용하여 팝업 노출
- 상단 네비게이션 메뉴 클릭 시 scrollintoview를 이용한 알맞은 위치로 이동
- 상단 네비게이션 레이아웃 설정

---

## 6. 💿 설치 및 실행 방법

Project Clone

`$ git clone` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm run dev`

---

## 7. 🌲 프로젝트 구조

```

📦src
 ┣ 📂components
 ┃ ┣ 📂VideoView
 ┃ ┃ ┣ 📜VideoView.js
 ┃ ┃ ┗ 📜VideoView.scss
 ┃ ┣ 📂bannerView
 ┃ ┃ ┣ 📜BannerView.js
 ┃ ┃ ┗ 📜BannerView.scss
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┗ 📜Footer.scss
 ┃ ┣ 📂imageView
 ┃ ┃ ┣ 📜ImageView.js
 ┃ ┃ ┣ 📜ImageView.scss
 ┃ ┃ ┗ 📜imageInfo.js
 ┃ ┣ 📂nav
 ┃ ┃ ┣ 📜Nav.js
 ┃ ┃ ┗ 📜Nav.scss
 ┃ ┗ 📂popView
 ┃ ┃ ┣ 📜PopView.js
 ┃ ┃ ┗ 📜PopView.scss
 ┣ 📂images
 ┃ ┗ 📜BG-banner-1.png
 ┣ 📜.DS_Store
 ┣ 📜index.js
 ┗ 📜index.scss

📦webpack-config
 ┣ 📂dist
 ┣ 📜webpack.config.common.js
 ┣ 📜webpack.config.dev.js
 ┗ 📜webpack.config.prod.js
```

## 8. 📕 레퍼런스

- 이 프로젝트는 <u>[원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6) 기업 과제를 토대로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
