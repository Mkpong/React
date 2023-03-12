import React from 'react';
import {Routes, Route , Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './component/NavComp'
import Userlist from "./component/Userlist";
import Teamlist from "./component/Teamlist";
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import NewTeam from './component/NewTeam';
import Teamview from './component/Teamview';
import Userview from './component/Userview';

function App() {
  return (
    <div>
      <NavComp></NavComp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<Userlist />}></Route>
        <Route path="/team" element={<Teamlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/team/create" element={<NewTeam />}></Route>
        <Route path="/team/view/:id" element={<Teamview />}></Route>
        {/* <Route path="/user/view/:id" element={<Userview />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
