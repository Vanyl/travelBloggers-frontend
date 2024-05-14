import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Home from "../pages/Home"
import About from "../pages/About"
import Authentication from "../components/Authentication"
import NoPage from "../pages/NoPage";
import Contact from "../pages/Contact"
import Article from "../pages/Article";


function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <BrowserRouter>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Authentication setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
          <Route path="about" element = {<About/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="article" element = {<Article />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
