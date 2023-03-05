# react에서 bootstarp-5 이용하기

## 1. bootstrap을 react에 설치하기
- Terminal에서 npm으로 boot strap 설치
> npm install react-bootstrap bootstrap

- 아래의 주소의 Browser globals의 코드를 publi/index.html의 head에 복사/붙여넣기

https://react-bootstrap.github.io/getting-started/introduction/

```
//Browser global
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
```

- css적용을 위해 App.js에 css파일 import해주기

`import 'bootstrap/dist/css/bootstrap.min.css';`
