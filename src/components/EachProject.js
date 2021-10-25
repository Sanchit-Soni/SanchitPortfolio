import React, { useEffect } from "react";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const EachProject = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let stateData = props.location.state;
  // var id = stateData["id"];
  var name = stateData["name"];
  var img = stateData["img"];
  var icons = stateData["icon"];
  var gitLink = stateData["gitLink"];
  var link = stateData["link"];
  console.log(icons);
  console.log(img);
  return (
    <div className="project-container">
      <Fade>
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
                {/* <Tilt className="Tilt cursor-pointer" options={{ max: 35 }}> */}
                <a href={gitLink} rel="noreferrer" target="_blank">
                  <button className="btnP-1 git">
                    <h4>Github</h4>
                  </button>
                </a>
                <a href={link} rel="noreferrer" target="_blank">
                  <button className="btnP-1 btnP-2 open">
                    <h4>Open</h4>
                  </button>
                </a>
                {/* </Tilt> */}
              </div>
            </div>
            <div className="project-col2">
              <Tilt className="Tilt cursor-pointer" options={{ max: 20 }}>
                <img lazy="true" className="img-card" src={img} alt="sad" />
              </Tilt>
            </div>
          </div>
          <center>
            <div className="project-about">
              <h1>Let's talk about the project</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown ... Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown ...
              </p>
            </div>
          </center>
          <div className="project-tech">
            <h1>What Technologies are used?</h1>
          </div>
          <div className="project-icon">
            {icons.map((icon, id) => (
              <div className="each-icon">
                <img src={icon} alt="icon" className="tech-icons" />
              </div>
            ))}
          </div>
        </center>
      </Fade>
    </div>
  );
};

export default EachProject;
