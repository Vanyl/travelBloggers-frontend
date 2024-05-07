import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import NoPage from "../pages/NoPage";

function AppRouter() {

  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
