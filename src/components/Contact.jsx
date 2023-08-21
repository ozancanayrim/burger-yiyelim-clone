import React from "react";
import Banner from "../assets/banner.png";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={Banner} alt="" />
      <div className="contact-content">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label htmlFor="names">Ad - Soyad</label>
          <input id="names" type="text" />
          <label htmlFor="mail">E-mail</label>
          <input id="mail" type="email" />
          <label htmlFor="message">Mesajınız</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
          <div className="contact-button-group">
            <button className="contact-button">Gönder</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
