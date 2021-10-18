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
//icons
// import HTML from "../images/skills/html.svg";
import CSS from "../images/skills/css.svg";
import JS from "../images/skills/js.png";
import RS from "../images/skills/react.svg";
import Mongo from "../images/skills/mongoDB.svg";
import Fire from "../images/skills/firee.png";
// import RN from "../images/skills/react-native.png";
// import Git from "../images/skills/git.png";
import node from "../images/skills/nodejs.svg";
import exp from "../images/skills/express.svg";
// import locomotiveScroll from "locomotive-scroll";

const Project = () => {
  const scrollRef = React.createRef();

  useEffect(() => {
    // const scroll = new locomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    // });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 0,
      name: "ProShop",
      link: "",
      img: ProShop,
      icons: [RS, node, Mongo, exp],
    },
    {
      id: 1,
      name: "EZNews",
      link: "",
      img: EZNews,
      icons: [RS, Fire, CSS, JS],
    },
    {
      id: 2,
      name: "MindSpace",
      link: "",
      img: C19tracker,
      icons: [RS, node, Mongo, exp],
    },
    {
      id: 3,
      name: "Instagram Clone",
      link: "",
      img: Insta,
      icons: [RS, node, Mongo, exp],
    },
    {
      id: 4,
      name: "Covid Sarthi",
      link: "",
      img: Covidsarthi,
      icons: [RS, node, Mongo, exp],
    },
    {
      id: 5,
      name: "Portfolio",
      link: "",
      img: Portfolio,
      icons: [RS, node, Mongo, exp],
    },
    {
      id: 6,
      name: "Covid19 Tracker",
      link: "",
      img: C19tracker,
      icons: [RS, node, Mongo, exp],
    },
  ];

  return (
    <div ref={scrollRef}>
      <Fade>
        <div data-scroll-speed="1" data-scroll-position="top">
          <center>
            <h1 className="exp-text">EXPLORE MY WORKS</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="object">
              <p>
                <i className="arrow down"></i>
              </p>
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
          <h1
          // data-scroll
          // data-scroll-speed="1"
          // data-scroll-position="top"
          // data-scroll-direction="horizontal"
          >
            Some of My Great Work Samples are:
          </h1>
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
