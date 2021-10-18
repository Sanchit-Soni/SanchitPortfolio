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
import mindspace from "../images/mindspace.png";
import Fade from "react-reveal/Fade";
//icons
import HTML from "../images/skills/html.svg";
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
      img: ProShop,
      icons: [RS, node, Mongo, exp],
      gitLink: "https://github.com/Sanchit-Soni/ProShop",
      link: "http://proshop-vr1.herokuapp.com/",
    },
    {
      id: 1,
      name: "EZNews",
      img: EZNews,
      icons: [RS, Fire, CSS, JS],
      gitLink: "https://github.com/Sanchit-Soni/EZNews",
      link: "https://chateznews.web.app/",
    },
    {
      id: 2,
      name: "MindSpace",
      link: "https://mindspace-2a3a2.web.app/",
      img: mindspace,
      icons: [RS, Fire, CSS, JS],
      gitLink: "https://github.com/Sanchit-Soni/MindSpace-Frontend",
    },
    {
      id: 3,
      name: "Instagram Clone",
      link: "https://instagram-8b046.web.app/",
      img: Insta,
      icons: [RS, Fire, CSS, JS],
      gitLink: "https://github.com/Sanchit-Soni/Instagram-clone",
    },
    {
      id: 4,
      name: "Covid Sarthi",
      link: "https://sheet-2-firebase-ef219.web.app/",
      img: Covidsarthi,
      icons: [RS, Fire, JS, CSS],
      gitLink: "https://github.com/Sanchit-Soni/CovidSarthi",
    },
    {
      id: 5,
      name: "Portfolio",
      link: "https://sanchit-soni.github.io/Portfolio-Final/",
      img: Portfolio,
      icons: [HTML, CSS, JS],
      gitLink: "https://github.com/Sanchit-Soni/Portfolio-Final",
    },
    {
      id: 6,
      name: "Covid19 Tracker",
      link: "https://covid19tracker-cc742.web.app/",
      img: C19tracker,
      icons: [RS, CSS],
      gitLink: "https://github.com/Sanchit-Soni/Covid19-Tracker",
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
