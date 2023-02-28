import {Routes, Route, Link} from "react-router-dom"
import Nav from './component/Nav';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import './css/Nav.css';
import './css/Login.css'

function App() {
  const menu = [
    {title: "home" , path: "/"},
    {title: "login" , path: "/login"},
    {title: "register" , path: "/register"}
  ]

  return (
    <div>
      <Nav menu={menu}></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login ID="이메일을 입력해 주세요" PW="비밀번호를 입력해 주세요" onChangeMode={function(){
            alert("로그인 시도");
          }}></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
