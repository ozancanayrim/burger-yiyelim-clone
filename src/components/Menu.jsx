import React from "react";
import { v4 as uuidv4 } from "uuid";
import { data } from "../helpers/Data";
import "../styles/Menu.css";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

const Menu = ({ increaseOrder, decreaseOrder, order }) => {
  const handleIncreaseClick = () => {
    increaseOrder();
  };

  const handleDecreaseClick = () => {
    decreaseOrder();
  };

  return (
    <>
      <div className="order-process">
        <h1>Burgerlerimiz</h1>
        <h2>
          Sepet Tutarınız : <span style={{ color: "red" }}>{order}</span>
        </h2>
        <Link to={"/basket"}>
          Sepetinize gitmek için tıklayınız <BsBasket />
        </Link>
      </div>
      <div className="card-container">
        {data.map((item) => {
          return (
            <div className="card" key={uuidv4()}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span>{item.price} TL</span>
              <div>
                <button
                  onClick={handleIncreaseClick}
                  className="increase-button"
                >
                  Arttır
                </button>
                <button
                  onClick={handleDecreaseClick}
                  className="decrease-button"
                >
                  Azalt
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
