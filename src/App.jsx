import React, { useState } from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Basket from "./components/Basket";

function App() {
  const [order, setOrder] = useState(0);

  const increase = () => {
    setOrder(order + 300);
  };

  const decrease = () => {
    if (order > 0) {
      setOrder(order - 300);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/menu"
          element={
            <Menu
              increaseOrder={increase}
              decreaseOrder={decrease}
              order={order}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket order={order} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
