import React from "react";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="nav__container">
      <Link to={"/"} className="nav__home">
        Home
      </Link>
      <Link to={"/live"} className="nav__live">
        Live Classes
      </Link>
      <Link to={"/videos"} className="nav__videos">
        Videos
      </Link>
      <img
        onClick={() => navigate("/")}
        className="nav__logo"
        src={logo}
        alt=""
      />
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
  );
};

export default Nav;
