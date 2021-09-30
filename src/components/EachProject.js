import React from "react";
import Tilt from "react-tilt";

const EachProject = (props) => {
  let stateData = props.location.state;
  // var id = stateData["id"];
  var name = stateData["name"];
  var img = stateData["img"];
  return (
    <div className="project-container">
      <center>
        <div className="project-row">
          <div className="project-col1">
            <p className="project-text">{name}</p>
            <p className="project-desc">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown ...
            </p>
            <div className="btn">
              <Tilt className="Tilt cursor-pointer" options={{ max: 35 }}>
                <button className="btn-1 git">
                  <h4>Github</h4>
                </button>

                <button className="btn-1 btn-2 open">
                  <h4>Open</h4>
                </button>
              </Tilt>
            </div>
          </div>
          <div className="project-col2">
            <Tilt className="Tilt cursor-pointer" options={{ max: 20 }}>
              <img className="img-card" src={img} alt="sad" />
            </Tilt>
          </div>
        </div>
        <center>
          <div className="project-about">
            <h1>Let's talk about the project</h1>
            <p>
              I built this during my internship with Dezingdia. It simplifies
              the task of making appointments to consult doctors. Moreover, it
              lets people buy medicines and get treatments.
            </p>
          </div>
        </center>
        <div className="project-tech">
          <h1>What Technologies are used?</h1>
        </div>
        <div className="project-icon">
          <div>HTML</div>
          <div>CSS</div>
          <div>JS</div>
          <div>ReactJS</div>
        </div>
      </center>
    </div>
  );
};

export default EachProject;
