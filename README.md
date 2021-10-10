# custom-react-app

### 프로젝트 설명
- React Web Application의 초기 필수 환경을 구현한 프로젝트
- React 기반 프로젝트를 새로 구축할 때 초기 환경을 대체할 목적으로 구현

### 프로젝트 목적
- `create-react-app`을 사용하지 않고 개발환경 구현
- 상태 관리 라이브러리의 경우 `recoil-env`와 같은 브랜치로 분기해서 프로젝트에 맞게 변경이 가능하도록 구현
- `TypeScript` 환경 구현
- `tsx`, `ts`, `jsx`, `js`, `scss`, `css`, `svg`, `png` 파일이 번들링 되도록 구현
- `eslint`, `prettier`, `husky` 등을 사용하여 `precommit`시점에 코드 정적 분석 도구가 동작하도록 구현
- API 호출 대비 `axios` 환경 구현
- atomic design, Action/Service 디자인 패턴 활용

### Setup
1. 프로젝트 최상위 디렉토리에서 `yarn` or `npm i` 명령어로 module 설치
2. `yarn start` or `npm start`로 `webpack-dev-server` 실행
3. URL `http://localhost:3030` 접근해서 페이지 뜨는 것 확인

### Tech Stack
- React 17
- React Router 5
- Typescript 4
- Webpack 5
- Babel 7

### Reference
- wiki
