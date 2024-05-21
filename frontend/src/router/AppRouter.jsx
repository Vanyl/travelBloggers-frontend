import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Home from "../pages/Home"
import About from "../pages/About"
import Authentication from "../components/Authentication"
import NoPage from "../pages/NoPage";
import Contact from "../pages/Contact"
import Article from "../pages/Article";
import Profile from "../components/Profile"
import ProfileSettings from "../components/ProfileSettings"
import AddArticle from "../components/AddArticle";

import ContinentEurope from '../components/ContinentEurope';
import CountrySpain from '../components/CountrySpain';
import CountryBelgium from "../components/CountryBelgium";
import CountryItaly from "../components/CountryItaly";
import CountrySwitzerland from "../components/CountrySwitzerland";
import CountryGermany from "../components/CountryGermany";
import CountryCroatia from "../components/CountryCroatia";
import CountryGreece from "../components/CountryGreece";
import CountryNetherlands from "../components/CountryNetherlands";
import CountryFrance from "../components/CountryFrance";

import ContinentAfrica from "../components/ContinentAfrica";
import CountryAlgeria from "../components/CountryAlgeria";
import CountryMorocco from "../components/CountryMorocco";
import CountryKenya from "../components/CountryKenya";
import CountryTunisia from "../components/CountryTunisia";
import CountrySouthAfrica from "../components/CountrySouthAfrica";

import ContinentAsia from "../components/ContinentAsia";
import CountryUnitedArabEmirates from "../components/CountryUnitedArabEmirates";
import CountryVietnam from "../components/CountryVietnam";
import CountryIndia from "../components/CountryIndia";
import CountryJapan from "../components/CountryJapan";
import CountryChina from "../components/CountryChina";
import CountrySouthKorea from "../components/CountrySouthKorea";


import ContinentOceania from "../components/ContinentOceania";
import CountryAustralia from "../components/CountryAustralia";
import CountryNewZealand from "../components/CountryNewZealand";

import ContinentSouthAmerica from "../components/ContinentSouthAmerica";
import CountryBrazil from "../components/CountryBrazil";
import CountryArgentina from "../components/CountryArgentina";
import CountryPeru from "../components/CountryPeru";

import ContinentNorthAmerica from "../components/ContinentNorthAmerica";
import CountryUSA from "../components/CountryUSA";
import CountryMexico from "../components/CountryMexico";
import CountryCanada from "../components/CountryCanada";

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
          <Route path="my-account" element = {<Profile />} />
          <Route path="my-account-settings" element = {<ProfileSettings />} />
          <Route path="my-account-add-article" element = {<AddArticle />} />

          <Route path="/europe" element={<ContinentEurope />} />
          <Route path="/country/spain" element={<CountrySpain />} />
          <Route path="/country/belgium" element={<CountryBelgium />} />
          <Route path="/country/italy" element={<CountryItaly />} />
          <Route path="/country/switzerland" element={<CountrySwitzerland />} />
          <Route path="/country/germany" element={<CountryGermany />} />
          <Route path="/country/croatia" element={<CountryCroatia />} />
          <Route path="/country/netherlands" element={<CountryNetherlands />} />
          <Route path="/country/greece" element={<CountryGreece />} />
          <Route path="/country/france" element={<CountryFrance />} />

          <Route path="/africa" element={<ContinentAfrica />} />
          <Route path="/country/southafrica" element={<CountrySouthAfrica />} />
          <Route path="/country/morocco" element={<CountryMorocco />} />
          <Route path="/country/algeria" element={<CountryAlgeria />} />
          <Route path="/country/tunisia" element={<CountryTunisia />} />
          <Route path="/country/kenya" element={<CountryKenya />} />

          <Route path="/asia" element={<ContinentAsia />} />
          <Route path="/country/india" element={<CountryIndia />} />
          <Route path="/country/southkorea" element={<CountrySouthKorea />} />
          <Route path="/country/japan" element={<CountryJapan />} />
          <Route path="/country/china" element={<CountryChina />} />
          <Route path="/country/uae" element={<CountryUnitedArabEmirates />} />
          <Route path="/country/vietnam" element={<CountryVietnam />} />

          <Route path="/oceania" element={<ContinentOceania />} />
          <Route path="/country/australia" element={<CountryAustralia />} />
          <Route path="/country/newzealand" element={<CountryNewZealand />} />

          <Route path="/southamerica" element={<ContinentSouthAmerica />} />
          <Route path="/country/Brazil" element={<CountryBrazil />} />
          <Route path="/country/Argentina" element={<CountryArgentina />} />
          <Route path="/country/Peru" element={<CountryPeru />} />

          <Route path="/northamerica" element={<ContinentNorthAmerica />} />
          <Route path="/country/usa" element={<CountryUSA />} />
          <Route path="/country/mexico" element={<CountryMexico />} />
          <Route path="/country/canada" element={<CountryCanada />} />



          

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
