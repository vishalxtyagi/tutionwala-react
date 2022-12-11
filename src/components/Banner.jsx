import React from "react";
import "../styles/Banner.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className="banner__image"></div>
      <div className="video__box">
        <div className="video__section">
          <div className="video__title">Videos</div>
          <div className="videos__python">
            <h4>Basics of Python</h4>
            <AiFillPlayCircle />
          </div>
          <div className="videos__datar">
            <h4>Data Science with R</h4>
            <AiFillPlayCircle />
          </div>
          <div className="videos__datapython">
            <h4>Data Science With Python</h4>
            <AiFillPlayCircle />
          </div>
        </div>
        <div className="logo__section">
        </div>
      </div>
    </>
  );
};

export default Banner;
