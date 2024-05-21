import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ContinentEurope from "../components/ContinentEurope";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
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
            if (data.articles.length > 0) {
              const user = { ...data.articles[0].user, articles: data.articles };
              setUserData(user);
            }
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
  }, [isLoggedIn]); // Récupérer les données de l'utilisateur chaque fois que l'état de connexion change

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="article" element={<Article userData={userData} />} />
        {isLoggedIn && (
          <Route path="/my-account" element={<Profile userData={userData} />} />
        )}
        <Route path="my-account-settings" element={<ProfileSettings />} />
        <Route path="my-account-add-article" element={<AddArticle />} />
        <Route path="/europe" element={<ContinentEurope />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
