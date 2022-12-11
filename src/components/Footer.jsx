import React from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <a
          target={"_blank"}
          className="footer__links"
          href="https://www.youtube.com/@tuitionwala.co.in."
        >
          <AiFillYoutube size={40} color={"rgb(255, 0, 0"} />
        </a>
        <a
          target={"blank"}
          className="footer__links"
          href="https://www.instagram.com/tuitionwala.co.in/"
        >
          <AiFillInstagram size={40} color={"rgb(228, 64, 95)"} />
        </a>
      </div>
      <h3 className="footer__content">
        Tuitionwala © 2022. All rights reserved
      </h3>
    </div>
  );
};

export default Footer;
