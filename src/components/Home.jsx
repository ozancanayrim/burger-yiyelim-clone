import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button onClick={() => navigate("/menu")} className="order-button">
        SİPARİŞ VER
      </button>
    </div>
  );
};

export default Home;
