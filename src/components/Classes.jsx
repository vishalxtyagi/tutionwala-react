import React from "react";
import "../styles/Classes.css";

const Classes = () => {
  return (
    <div className="class__panel">
      <h1 className="class__title">
        Live classes
      <div className="stream__icon"></div>
      </h1>
      <div className="panel__container">
        <div className="card__c card">
          <div className="c"></div>
          <h5>C Language</h5>
        </div>
        <div className="card__dsa card">
          <div className="dsa"></div>
          <h5>DSA</h5>
        </div>
        <div className="card__cpp card">
          <div className="cpp"></div>
          <h5>C++</h5>
        </div>
        <div className="card__python card">
          <div className="python"></div>
          <h5>Python</h5>
        </div>
        <div className="card__java card">
          <div className="java"></div>
          <h5>Java</h5>
        </div>
        <div className="card__r card">
          <div className="r"></div>
          <h4>R language</h4>
        </div>
      </div>
    </div>
  );
};

export default Classes;
