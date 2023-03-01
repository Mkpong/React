# React와 Spring boot 연동하기

- 프로젝트를 진행할때 react에서 spring boot에 data를 요청할때 cors문제가 발생한다.
- react는 localhost:3000을 사용하지만 spring boot는 localhost:8080를 사용해 발생하는 문제
- cors문제를 해결해주면 된다

1. React의 /project에 http-proxy-middleware 설치
> npm install http-proxy-middleware

2. React의 /project/src에 setupProxy.js파일을 생성
- 내부의 소스코드는 아래와 같이 작성하면 된다.

```
//setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  //app.use는 미들웨어를 사용할때 사용
  // '/api'로  요청이 오면, proxy미들웨어를 실행
  app.use(
    createProxyMiddleware('/api' , {
      //spring boot 포트는 8080번이므로 target을 8080으로 설정 
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
```
이와 같은 코드를 작성하게 되면 react에서 '/api'로 시작하는 요청이 왔을때
localhost:3000/api/... 의 코드를 자동으로 localhost:8080/api/... 으로 프록싱을 해준다.
프록싱 과정을 통해 cors의 문제 또한 해결할 수 있다.

- proxy를 통해 cors 문제를 해결하는 과정은 추후에 업로드
