import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <div>
      <Fade>
        <center>
          <h1> Experiences</h1>
        </center>
        <br></br>
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
      </Fade>
    </div>
  );
};

export default Experience;
