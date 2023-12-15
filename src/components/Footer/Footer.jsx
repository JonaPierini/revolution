import React from "react";
import "./Footer.css";
import revolution from "../../assets/revolution-main.jpeg";
import whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="brand-section">
        <h1 className="footer-font">
          <span className="color-rojo">REVOLUTION </span>
          <span className="color-azul">PHARMA</span>
        </h1>
        <Link to={"/"}>
          <img src={revolution} alt="Logo" className="img_footer" />
        </Link>
      </div>

      <div className="contact-section">
        <h4>Contact</h4>
        <a
          href="https://web.whatsapp.com/send?phone=+52 1 871 434 1900"
          target="blank"
        >
          <img src={whatsapp} alt="WhatsApp" className="img_wsp" />
        </a>
      </div>
    </div>
  );
};
