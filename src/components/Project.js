import React, { useState } from "react";

import { Row, Col, Card } from "react-bootstrap";
import EffectCard from "./EffectCard";
import "../CSS/project.css";

const Project = () => {
  const data = [
    { id: 0, name: "ProShop" },
    { id: 1, name: "xyz" },
    { id: 2, name: "sadj" },
    { id: 3, name: "sdj" },
    { id: 4, name: "sdj" },
    { id: 5, name: "sdj" },
  ];

  return (
    <div>
      <br></br>
      <center>
        <h1>Projects</h1>
      </center>
      <br></br>
      <center>
        <h1>Some of My Great Work Samples are:</h1>
      </center>
      <div className="xyz">
        <div className="row-pr">
          {data.map((des, index) => (
            <div key={index}>
              <div className="cards p-0">
                <EffectCard data={des} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
