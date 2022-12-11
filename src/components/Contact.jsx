import React from "react";
import vg from "../assets/avatar2.webp";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="about">
        <img className="about__image" src={vg} alt="" />
        <div className="about__details">
          <h1 className="about__title">About Us</h1>
          <h3 className="about__description">
            TuitionWala - Ab pdhenge nhi sikhenge... The motto of the
            TuitionWala is to provide 360 support to all college
            students......we provide live tuitions to students and also upload
            some useful course videos on YouTube (like :- c -language , C++ ,
            etc....) . We also provide proper guidance about all of your
            syllabus , concepts , courses and placements.....we ensure that each
            and every student of TuitionWala got placed in best companies or
            start their own startups.....! Thanks 😊
          </h3>
        </div>
      </div>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">
                  CONTACT INFO : +91 813-149-28595
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                    />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
