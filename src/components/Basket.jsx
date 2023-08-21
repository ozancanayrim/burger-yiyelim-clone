import React from "react";
import Burger from "../assets/burger.jpg";
import "../styles/Basket.css";
const burgerContent = {
  title: "Efsane Burger",
  image: Burger,
  content: "150 gr kasap burger, patates, turşu",
  price: 300,
};

const Basket = ({ order }) => {
  return (
    <div className="basket-container">
      <h1 style={{ color: "red" }}>Sepetiniz</h1>
      <div className="basket-content">
        <img src={burgerContent.image} alt="" />
        <h3>{burgerContent.title}</h3>
        <p>{burgerContent.content}</p>
        <span>{order} TL</span>
        <button className="confirm-button">Onayla</button>
      </div>
    </div>
  );
};

export default Basket;
