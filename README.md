# custom-react-app
### 프로젝트 설명
- React Web Application의 초기 필수 환경을 구현한 프로젝트
- React 기반 프로젝트를 새로 구축할 때 초기 환경을 대체할 목적으로 구현

### 프로젝트 목적
- `create-react-app`을 사용하지 않고 개발환경 구현
- `TypeScript` 환경 구현
- 상태 관리 라이브러리의 경우 `recoil-env`와 같은 브랜치로 분기해서 프로젝트에 따라 변경이 가능하도록 구현
- `tsx`, `ts`, `jsx`, `js`, `scss`, `css`, `svg`, `png` 파일이 번들링 되도록 구현
- `linter`가 `git hook`에서 동작하여 코드 품질 관리가 자동화되도록 구현
- API 호출 대비 `axios` 환경 구현
- atomic design, Action/Service 디자인 패턴 활용 ([Wiki](https://github.com/kjsu/custom-react-app/wiki/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4))

### Tech Stack
- React 17, React Router 5, TypeScript 4, Recoil 0.4, sass
- Webpack 5, Babel 7, ESLint, Husky, Prettier

### 미해결 이슈
- `eslint`, `prettier`, `husky` 및 관련 모듈을 조합해서 `precommit` 시점에  
`linter`가 동작하도록 구현했으나 현재 오류 발생해서 수정 중(`f/eslint`)
- Action/Service 디자인 패턴을 활용하면서 `React.FC`가 아닌 전역에서 `recoil`을 사용하려고  
`RecoilExternalStatePortal.tsx`를 적용했지만 현재 오류 발생해서 수정 중(`f/recoil`)
---
### Setup
1. 프로젝트 최상위 디렉토리에서 `yarn` or `npm i` 명령어로 module 설치
2. `yarn start` or `npm start`로 `webpack-dev-server` 실행
3. URL `http://localhost:3030` 접근해서 페이지 뜨는 것 확인
