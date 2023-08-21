import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav>
        <Link>
          <AiFillFacebook />
        </Link>
        <Link>
          <AiFillInstagram />
        </Link>
        <Link>
          <AiFillTwitterSquare />
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
