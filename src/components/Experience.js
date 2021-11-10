import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <Fade>
              <div>
                <img
                  lazy="true"
                  className="startup"
                  src={Startup}
                  alt="rocket"
                />
              </div>
            </Fade>
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
            <h1>Timeline</h1>
            <br></br>
          </center>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              date="February 2021 - October 2021"
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h1 className="vertical-timeline-element-title"> Gyaanbee</h1>

              <h5 className="vertical-timeline-element-subtitle">
                <i>Catalyst Quiz Corp</i>
              </h5>
              <p>Worked as a Full Stack Developer (MERN Stack)</p>
              <p>
                Developed Gyanbee, an innovative learning platform for
                inquisitive kids. Key contributions include Frontend and Backend
                development of the application.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2021 – June 2021"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h1 className="vertical-timeline-element-title">Covid Sarthi</h1>
              <h5 className="vertical-timeline-element-subtitle">
                <i>Freelance</i>
              </h5>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
                A covid related Website to help you find verified resources
                related to all COVID needs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March 2021 – May 2021"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h1 className="vertical-timeline-element-title">
                Girl Script Summer of Code
              </h1>
              <h5 className="vertical-timeline-element-subtitle">
                <i>Open Source Contribution</i>
              </h5>
              <p>
                Made a number of successful contributions to a wide array of
                Open-Source projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="March 2020 - July 2020"
              contentStyle={{ background: "#8739f9", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
              iconStyle={{ background: "#8739f9", color: "black" }}
              // icon={<WorkIcon />}
            >
              <h1 className="vertical-timeline-element-title">
                Backmarker Sports
              </h1>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <h5 className="vertical-timeline-element-subtitle">
                <i>Web Developer Intern</i>
              </h5>
              <p>
                Successfully worked on a real-time project. Key contributions
                include design process and frontend development of the
                application.
              </p>
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
