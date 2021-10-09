import React, { useEffect } from "react";
import EffectCard from "./EffectCard";
import "../CSS/project.css";
import Tilt from "react-tilt";
import ProShop from "../images/proshop.png";
import Portfolio from "../images/portfolio.png";
import Covidsarthi from "../images/covidsarthi.png";
import EZNews from "../images/eznews.png";
import C19tracker from "../images/c19tracker.png";
import Insta from "../images/instagram.png";
import Fade from "react-reveal/Fade";
// import locomotiveScroll from "locomotive-scroll";

const Project = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    // const scroll = new locomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    // });
  });
  const data = [
    { id: 0, name: "ProShop", link: "", img: ProShop },
    { id: 1, name: "EZNews", link: "", img: EZNews },
    { id: 2, name: "MindSpace", link: "", img: C19tracker },
    { id: 3, name: "Instagram Clone", link: "", img: Insta },
    { id: 4, name: "Covid Sarthi", link: "", img: Covidsarthi },
    { id: 5, name: "Portfolio", link: "", img: Portfolio },
    { id: 6, name: "Covid19 Tracker", link: "", img: C19tracker },
  ];

  return (
    <div ref={scrollRef}>
      <Fade>
        <div data-scroll-speed="1" data-scroll-position="top">
          <center>
            <p className="exp-text">EXPLORE MY WORKS</p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="scroll-down">
              <h1>Scroll</h1>
              <h1>Down</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </center>
          {/* </center> */}
        </div>

        {/* <br></br> */}
        <center>
          <p
          // data-scroll
          // data-scroll-speed="1"
          // data-scroll-position="top"
          // data-scroll-direction="horizontal"
          >
            Some of My Great Work Samples are:
          </p>
        </center>
        <div className="xyz">
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
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <p className="exp-text">WILL ADD MORE WORK SAMPLES SOON....</p> */}
      </Fade>
    </div>
  );
};

export default Project;
