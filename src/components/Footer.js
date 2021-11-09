import React from "react";
import "../CSS/navbar.css";

const Footer = () => {
  return (
    <div className="footer">
      <center>
        <p style={{ color: "white" }}>
          Made by{" "}
          <a
            className="name-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sanchit-soni-2318a61b2/"
          >
            {" "}
            Sanchit Soni{" "}
          </a>
        </p>
      </center>
    </div>
  );
};

export default Footer;
