import React from "react";

import EffectCard from "./EffectCard";
import "../CSS/project.css";
import Tilt from "react-tilt";

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
      <section>
        <center>
          <h1>EXPLORE MY ARTS</h1>
          <h1>Scroll</h1>
          <h1>up</h1>
        </center>
      </section>
      <br></br>
      <center>
        <h1>Projects</h1>
      </center>
      <br></br>
      <center>
        <h1>Some of My Great Work Samples are:</h1>
      </center>
      <div className="xyz" data-scroll-section>
        <div className="row-pr">
          {data.map((des, index) => (
            <div key={index}>
              <Tilt className="Tilt cursor-pointer" options={{ max: 20 }}>
                <div className="cards p-0">
                  <EffectCard data={des} />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Project;
