import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Fade from "react-reveal/Fade";
import "../CSS/experience.css";
// import Launch from "../images/launch.png";
import Startup from "../images/startup-launch.png";

const Experience = () => {
  return (
    <div className="exp-container">
      <Fade>
        <div className="exp-row">
          <div className="exp-header">
            <center>
              <p>Worked for several startups.</p>
              <h1 className="explore-text">Work Experiences</h1>
            </center>
          </div>
          <center>
            <div>
              <img lazy="true" className="startup" src={Startup} alt="rocket" />
            </div>
          </center>
          <div className="object">
            <p>
              <i className="arrow down"></i>
            </p>
          </div>
        </div>
        <br></br>
        <div className="exp-timeline">
          <center>
            <h1>Timeline </h1>
            <br></br>
          </center>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              date="Feb - present"
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">Gyaanbee</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Catalyst Quiz Corp
              </h5>
              <p>Project</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="may - june"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">Covid Sarthi</h4>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>A covid related Website</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                Girl Script Summer of Code
              </h4>

              <p>Open Source Contibution</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="may - june"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "black" }}
              // icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                Backmarker Sports
              </h4>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>A Sports Driven Website</p>
            </VerticalTimelineElement>{" "}
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              // icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
