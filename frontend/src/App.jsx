import React from "react";
import Navbar from "./components/Navbar"
import './App.css'
import './router/AppRouter'
import './components/Navbar'
import AppRouter from "./router/AppRouter";



function App() {

  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
  )
}

export default App
