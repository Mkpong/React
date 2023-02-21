# 1. 개발환경 setting

- Node.js 설치
- VS code 설치
- React 프로젝트 생성
   - 원하는 위치에 빈폴더를 하나 생성
   - 해당 위치에서 PowerShell을 실행
   - npx create-react-app 'project name'
   
위의 작업을 모두 마치고 VS code에서 Open folder로 해당 프로젝트 파일을 열어주면
React 개발의 준비는 끝이난다.

# 2. JSX
### jsx란 .js파일에서 html을 대신하기 위해 개발된 언어
- 대부분의 문법은 비슷하지만 다르게 사용하는 경우들이 존재하기때문에 아래에 정리

- **HTML과 JSX의 차이**

|HTML|JSX|Remarks|
|:--:|:--:|:--:|
|class|className|-|
|style=""|style={{}}|{style: 'value'}|


- **JSX 문법**
   - 변수를 넣을때에는 { 변수명 } 으로 사용(Data-Binding)
