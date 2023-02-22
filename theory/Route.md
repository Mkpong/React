# Route

## 1. 사용방법

- vs code 터미널에서 react-router-dom@6 (6버전)을 설치
- 설치할때는 해당 프로젝트 폴더에 들어가서 설치해야함

`npm install react-router-dom@6`

## 2. BrowserRouter

- 웹에서 보편적으로 많이 쓰는 BrowserRouter
- index.js에 BrowserRouter을 추가해 주어야 한다.

`import {BrowserRouter} from 'react-router-dom';`

-App.js에 다음과 같은 기능 추가

`import {Routes, Route, Link} from "react-router-dom"`

- index.js에서 \<BrowserRouter>안으로 \<App />를 감싸준다

```
//index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- App.js
   - \<Link> -> html의 \<a>와 같은 기능을 한다. 해당 링크를 누르면 to="경로"로 이동
   - \<Routes> -> 안에 다수의 Route를 포함하고 있다는 태크
   - \<Route> -> path="경로" 해당 경로이면 element={\<Home />} Home 컴포넌트를 띄워준다

```
//App.js
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
```
 
  
