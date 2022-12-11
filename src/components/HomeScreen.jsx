import React from "react";
import "../styles/HomeScreen.css";
import Banner from "./Banner";
import Classes from "./Classes";
import More from "./More";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <Classes />
      <More /> 
    </div>
  );
};

export default HomeScreen;
