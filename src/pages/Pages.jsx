// Core
import React from "react";

// Pages
import Home from "./Home";
import DetailSurah from "./DetailSurah";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

// Router
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah/:surah" element={<DetailSurah />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Pages;
