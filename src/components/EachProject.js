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
          </div>
          <div className="project-col2">
            <Tilt className="Tilt cursor-pointer" options={{ max: 20 }}>
              <img className="img-card" src={img} alt="sad" />
            </Tilt>
          </div>
        </div>
      </center>
    </div>
  );
};

export default EachProject;
