"# react_blog"


"npm run build" 로 서버 빌드 후 "npm run development" 로 시작

"npm start" 로 시작



---------전역 설치
npm install -g webpack webpack-dev-server

npm install -g babel-cli nodemon cross-env
babel-cli: 콘솔 환경에서 babel 을 사용 할 수 있게 해줍니다 (ES6 transpile)
nodemon: development 환경에서 파일이 수정 될 때마다 서버를 재시작해줍니다
cross-env: 윈도우 / 리눅스 / OSX 에서 환경변수값을 설정합니다.


-------- 의존 모듈 설명
axios: HTTP 클라이언트
react-addons-update: Immutability Helper (Redux 의 store 값을 변경 할 때 사용됨)
react-router: 클라이언트사이드 라우터
react-timeago: 3 seconds ago, 3 minutes ago 이런식으로 시간을 계산해서 몇분전인지 나타내주는 React 컴포넌트
redux, react-redux; FLUX 구현체, 그리고 뷰 레이어 바인딩
redux-thunk: redux의 action creator에서 함수를 반환 할 수 있게 해주는 redux 미들웨어, 비동기작업을 처리 할 때 사용됩니다
"# react_redux" 
