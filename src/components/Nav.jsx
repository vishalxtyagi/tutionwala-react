import React from "react";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav__container">
    <div className="nav__items">
        <Link to={"/"} className="nav__home">
          Home
        </Link>
        <Link to={"/live"} className="nav__live">
          Live Classes
        </Link>
        <Link to={"/videos"} className="nav__videos">
          Videos
        </Link>
      </div>
      
      <img
        onClick={() => navigate("/")}
        className="nav__logo"
        src={logo}
        alt=""
      />
      <div className="nav__items">
        <Link to={"/notes"} className="nav__notes">
          Notes
        </Link>
        <Link to={"/testimonial"} className="nav__testimonial">
          Testimonial
        </Link>
        <Link to={"/contact"} className="nav__contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;
