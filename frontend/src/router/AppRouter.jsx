import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Home from "../pages/Home"
import About from "../pages/About"
import Authentication from "../components/Authentication"
import NoPage from "../pages/NoPage";



function AppRouter() {

  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="about" element = {<About/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
