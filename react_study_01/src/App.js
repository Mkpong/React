import {Routes, Route, Link} from "react-router-dom"
import Home from './component/Home';
import LoginComp from './component/LoginComp';
import Register from './component/Register';
import NavComp from './component/NavComp';
import Board from './component/Board';
import './css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <NavComp></NavComp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginComp ID="이메일을 입력해 주세요" PW="비밀번호를 입력해 주세요"></LoginComp>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Routes>
    </div>
  );
}

export default App;
