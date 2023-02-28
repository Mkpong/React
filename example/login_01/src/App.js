import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Home from "./page/Home";
import Login from "./page/Login";
import Nav from "./page/Nav";

function App() {
  const menu = [
    {title: "home" , path: "/"},
    {title: "login" , path: "/login"},
    {title: "holy" , path: "/"}
  ]
  return (
    <div>
    <Nav menu={menu}></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login ID="이메일을 입력해 주세요" PW="비밀번호를 입력해 주세요" onChangeMode={function(){
          alert("로그인 시도");
        }}></Login>} />
      </Routes>
    </div>
  );
}

export default App;
