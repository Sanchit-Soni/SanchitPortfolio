import React from "react";
import { InlineWidget } from "react-calendly";
import "../CSS/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <center>
        <div className="meet-div">
          <h1>Meet and Greet</h1>
          <p>Schedule a 30 minutes call with me via Google meet.</p>
          <div className="meet-icons">
            <a
              href="mailto:sanchitsony@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-envelope fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sanchit-soni-2318a61b2/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin  fa-2x"></i>
            </a>
            <a
              href="https://github.com/Sanchit-Soni"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github  fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/sanchit__soni/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram  fa-2x"></i>
            </a>
          </div>
        </div>
      </center>
      <div className="calendy">
        <InlineWidget
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: true,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          styles={{
            height: "600px",
          }}
          url="https://calendly.com/sanchitsoni/30min"
        />
      </div>
    </div>
  );
};

export default Contact;
