import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/APropos";
import PageErreur from "./pages/PageErreur";
import Logement from "./pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<PageErreur />} />
        <Route path="/Logement" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
