import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Home from "../pages/Home";
import About from "../pages/About";
import Authentication from "../components/Authentication";
import NoPage from "../pages/NoPage";
import Contact from "../pages/Contact";
import Article from "../pages/Article";
import Profile from "../components/Profile";
import ProfileSettings from "../components/ProfileSettings";
import AddArticle from "../components/AddArticle";
import EditArticle from "../components/EditArticle";
import ContinentResult from "../components/ContinentResult";
import CountryResult from "../components/CountryResult";
import ScrollToTop from '../components/ScrollToTop'


function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        try {
          const response = await fetch('https://travel-blogger-46c930280c07.herokuapp.com/api/my-articles', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Data received from server:", data);

            const user = data.user || (data.articles.length > 0 ? { ...data.articles[0].user, articles: data.articles } : { ...data.user, articles: [] });
            setUserData(user);

            setIsLoggedIn(true);
          } else {
            console.error('Failed to fetch data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [isLoggedIn]); 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <HashRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="article/:articleId" element={<Article userData={userData} />} />
        {isLoggedIn && (
          <>
            <Route path="/my-account" element={<Profile userData={userData} accessToken={accessToken} />} />
            <Route path="/my-account-settings" element={<ProfileSettings userData={userData} accessToken={accessToken} />} />
            <Route path="my-account-add-article" element = {<AddArticle accessToken={accessToken} />} />
            <Route path="my-account-edit-article/:articleId" element = {<EditArticle accessToken={accessToken} />} />
          </>
          )}
          <Route path="/continent/:continent" element={<ContinentResult />} />
          <Route path="/country/:country" element={<CountryResult />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </HashRouter>
  );
}

export default AppRouter;
