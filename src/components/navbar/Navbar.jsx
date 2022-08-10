import React, { useState } from "react";
import "./Navbar.css";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoBlack from "../../assets/image/logo-black.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div
        className={click ? "overlay active" : ""}
        onClick={closeMobileMenu}
      ></div>
      <header className="navbar">
        <nav className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={LogoBlack} alt="Alquran Digital" />
          </Link>

          {/* Menu Btn Mobile */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <div className={click ? "navbar-menu active" : "navbar-menu"}>
            <Link to="#" className="navbar-links" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="#" className="navbar-links" onClick={closeMobileMenu}>
              Juz
            </Link>
            <Link to="#" className="navbar-links" onClick={closeMobileMenu}>
              About
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
