import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Home from "./page/Home";
import Login from "./page/Login";

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

export default App;
