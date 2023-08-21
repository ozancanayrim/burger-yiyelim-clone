import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img src={BurgerLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-nav">
        <Link to={"/"}>Anasayfa</Link>
        <Link to={"/about-us"}>Hakkımızda</Link>
        <Link to={"/menu"}>Menü</Link>
        <Link to={"/contact"}>İletişim</Link>
        <Link to={"/basket"}>Sepet</Link>
      </div>
    </nav>
  );
};

export default Navbar;
