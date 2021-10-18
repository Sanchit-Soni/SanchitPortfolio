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
