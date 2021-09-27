import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div>
      Experiences
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#8739f9", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #8739f9" }}
          date="Feb - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Gyaanbee</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Catalyst Quiz Corp
          </h4>
          <p>Project</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="may - june"
          contentStyle={{ background: "white", color: "#8739f9" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Covid Sarthi</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>A covid related Website</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          contentStyle={{ background: "#8739f9", color: "#fff" }}
          iconStyle={{ background: "#8739f9", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Girl Script Summer of Code
          </h3>

          <p>Open Source Contibution</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="may - june"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "white", color: "black" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Covid Sarthi</h3>
          {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
          <p>A covid related Website</p>
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
