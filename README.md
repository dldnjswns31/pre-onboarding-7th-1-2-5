# 원티드 프리온보딩 프론트엔드 - Week 1-2

원티드 프리온보딩 **프론트엔드 5팀**의 **find-best-checkIssue**입니다.<br>
해당 레포지토리는 원티드 프리온보딩 2차 과제로 특정 깃헙 레파지토리(angular/angular-cli)의 이슈 목록과 상세 내용을 확인하는 웹 사이트입니다.<br>
해당 프로젝트에서는 깃헙에서 제공한 [API]('https://api.github.com/repos/angular/angular-cli/issues') 를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 10월 29일 ~ 2022년 10월 30일

## 👥 팀원 소개

| 이름        | github                           |
| --------------- |  -------------------------------- |
| 류승연 (팀장)   | https://github.com/seungyeon-rr  |
| 공은채 (부팀장) | https://github.com/ericagong     |
| 박지현          | https://github.com/hyoniiii      |
| 배창현          | https://github.com/baechanghyeon |
| 이원준          | https://github.com/dldnjswns31   |
| 임연주          | https://github.com/yeondooo      |
| 지재영          | https://github.com/jaeyeong815   |
| 차혜인          | https://github.com/hyeincha      |


## 🛠 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
</div>


## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.
```
  REACT_APP_GITHUB_API_URL=https://api.github.com/repos/angular/angular-cli
```
2. 의존성 패키지를 설치합니다.
```zsh
$ npm install
```
3. 프로젝트를 실행합니다.
```zsh
$ npm start
```


- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔰 사용한 패키지와 버전

```
    "@uiw/react-md-editor": "^3.19.3",
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.2",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">
- react-md-editor: 마크다운 렌더링 라이브러리<br>
- axios : 서버와 비동기 통신<br>
- styled-components : 스타일 적용<br>
- react-router-dom : 라우터 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- prettier : 팀원간 코드 포맷 통일<br>
- husky : Git Hooks 적용<br>
</div>
</details>

## 🔗 배포 링크

[CheckIssue](http://team5-checkissue.s3-website.ap-northeast-2.amazonaws.com/)

- 해당 프로젝트는 AWS S3를 통해 배포하였습니다.
- 상단 링크에 접속하시면 바로 CheckIssue를 이용할 수 있습니다.

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜apis.js - api 모듈
 ┃ ┗ 📜instance.js - axios 인스턴스 생성
 ┣ 📂components
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📜DetailFrame.jsx - DetailPage 레이아웃
 ┃ ┃ ┣ 📜IssueContent.jsx - Markdown 레이아웃
 ┃ ┃ ┗ 📜IssueInfo.jsx - Issue 상세 정보 
 ┃ ┣ 📂List
 ┃ ┃ ┣ 📜List.jsx - List 모듈
 ┃ ┃ ┗ 📜ListFrame.jsx - ListPage 목록 & 무한스크롤링  
 ┃ ┗ 📂shared
 ┃ ┃ ┣ 📜Advertisement.jsx - 광고 배너 컴포넌트
 ┃ ┃ ┣ 📜Error.jsx - 에러 컴포넌트
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜NotFound.jsx - 에러 컴포넌트(404)
 ┃ ┃ ┗ 📜Spinner.jsx - 로딩 컴포넌트
 ┣ 📂context
 ┃ ┗ 📜IssueContext.jsx - ContextAPI store
 ┣ 📂pages
 ┃ ┣ 📜DetailPage.jsx 
 ┃ ┣ 📜ErrorPage.jsx
 ┃ ┣ 📜ListPage.jsx
 ┃ ┗ 📜NotFoundPage.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.jsx - 전역 스타일
 ┣ 📜App.js
 ┣ 📜Router.jsx
 ┗ 📜index.js
 ```

</div>
</details>


## ✨ 주요 기능

| 페이지             | API 연결 및 기능                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이슈 목록 화면 | ✅이슈 목록 가져오기 API 활용<br> ✅open 상태의 이슈 중 코멘트가 많은 순으로 정렬<br> ✅각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시<br>✅다섯번째 셀에는 광고 이미지 출력 및 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동<br>✅화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)<br> |
| 이슈 상세 화면        | ✅이슈의 상세 내용 표시<br>✅‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시<br>|
| 공통 헤더        | ✅두 페이지는 공통 헤더를 공유합니다.<br>✅헤더에는 Organization Name / Repository Name이 표시됩니다.<br>                                                                                                                                                 |  | 반응형 | ✅모바일<br>✅태블릿 <br>✅PC |

## ❗️ 필수 요구사항

- 이슈 목록 및 상세 화면 기능 구현
- Context API를 활용한 API 연동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
- 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)
  
## 👍 Best Practice 선정 이유

### 인피니티 스크롤 : Intersection Observer API
- 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하여 scroll event 방식의 단점인 불필요한 API 요청을 줄이고 에러를 방지하였습니다.
https://github.com/FindBestPractice/CheckIssue/blob/8882f42d32d62da4bb7c5f01a8efdb62b2b117fe/src/components/List/ListFrame.jsx#L43-L73

### Context API
- Reducer를 사용하여 상태관리를 용이하게 했습니다.
- props를 넘겨주지 않아도 각 component에서 전역적으로 관리되는 데이터를 필요한 곳에서만 사용할 수 있습니다.
https://github.com/FindBestPractice/CheckIssue/blob/8882f42d32d62da4bb7c5f01a8efdb62b2b117fe/src/context/IssueContext.jsx#L1-L44

### github API 
- 쿼리 파라미터로 조건을 지정하여 불필요한 로직을 줄였습니다.
https://github.com/FindBestPractice/CheckIssue/blob/8882f42d32d62da4bb7c5f01a8efdb62b2b117fe/src/apis/apis.js#L1-L18

### 에러 화면
- 에러화면으로 리다이렉트 시 메인 페이지로 이동하는 버튼을 추가하여 UX를 개선했습니다.
https://github.com/FindBestPractice/CheckIssue/blob/8882f42d32d62da4bb7c5f01a8efdb62b2b117fe/src/components/List/ListFrame.jsx#L26-L40
https://github.com/FindBestPractice/CheckIssue/blob/8882f42d32d62da4bb7c5f01a8efdb62b2b117fe/src/components/shared/Error.jsx#L4-L16

