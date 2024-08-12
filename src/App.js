import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Sigin from "./pages/sigin";
import Home from "./pages/home";

function APP(){
  
  return(
  <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sigin/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/home" Component={<Home/>}/>
    </Routes>

    </BrowserRouter>
    </div>

  );
}
export default APP;