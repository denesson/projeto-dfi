import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from "./Components/Home";
import Cadastro from "./Components/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;