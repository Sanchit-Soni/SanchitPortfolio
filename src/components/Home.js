import React from "react";
// import Typed from "react-typed";
import Particles from "react-particles-js";
import "../CSS/home.css";
// import About from "./About";
// import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import HTML from "../images/skills/html.svg";
import CSS from "../images/skills/css.svg";
import JS from "../images/skills/js.svg";
import RS from "../images/skills/react.svg";
import Mongo from "../images/skills/mongoDB.svg";
import Fire from "../images/skills/firee.png";
import RN from "../images/skills/react-native.svg";
import Git from "../images/skills/git.svg";
import node from "../images/skills/nodejs.svg";
import exp from "../images/skills/express.svg";
import Cal from "../images/calendar.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 190,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.2,
              },
              move: {
                direction: "up",
                speed: 0.25,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        /> */}
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: false,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />

        {/* 
        <Particles
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 600,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 4,
                out_mode: "out",
              },
              shape: {
                type: ["image"],
                image: [
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
                    height: 20,
                    width: 27,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1028px-Visual_Studio_Code_1.18_icon.svg.png",
                    height: 23,
                    width: 27,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                    height: 20,
                    width: 20,
                  },
                  {
                    src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                    height: 22,
                    width: 22,
                  },
                ],
              },
              color: {
                value: "#CCC",
              },
              size: {
                value: 30,
                random: false,
                anim: {
                  enable: true,
                  speed: 4,
                  size_min: 10,
                  sync: false,
                },
              },
            },
            retina_detect: false,
          }}
        /> */}
        <Fade>
          <div className="row-name ">
            {/* <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}> */}
            <div className="col-name">
              {/* <div className="col-name gradient-border"> */}
              <p>Who Is He?</p>
              <h1>
                Sanchit Soni
                {/* <span className="wave">👋</span> */}
              </h1>
              <p>
                "A fresher with experience", this line says exactly who he is.
                He is a software developer who crafts beautiful web and apps.
                His perfect balance of technical & managerial skills stands him
                apart from the crowd.
              </p>
              {/* <Typed
                className="text"
                strings={["A Developer", "A Gamer", "A Student"]}
                typeSpeed={70}
                backSpeed={90}
                loop
              ></Typed> */}
              <center>
                <div className="btn">
                  {/* <Tilt className="Tilt cursor-pointer" options={{ max: 35 }}> */}
                  <a href="#skills">
                    <button className="btn-1">
                      <p>Know More</p>
                    </button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1JAGassESJxlnazNPAmrf2PQyK3zCz4Yw/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn-1 btn-2">
                      <p>Download Resume</p>
                    </button>
                  </a>
                  {/* </Tilt> */}
                </div>
              </center>
            </div>
            {/* </Tilt> */}
            <div className="col2-name">
              {/* <img src="https://media0.giphy.com/media/L8K62iTDkzGX6/giphy.gif" /> */}
            </div>
          </div>
        </Fade>
      </div>
      {/* <section>
        <About />
      </section> */}
      <Fade>
        <div className="skills-container" id="skills">
          <div className="skill-row">
            <div className="skill-col1">
              <h1>What He Does?</h1>
              <p>
                He creates elegant, logical web and mobile app solutions. In his
                hobby time, he codes.
              </p>
              <h1>Think. Code. Debug.</h1>
            </div>
            <div className="skill-col2">
              <img
                className="skill-icon mongo"
                src={Mongo}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon node"
                src={node}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon react"
                src={RS}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon express"
                src={exp}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon html"
                src={HTML}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon css"
                src={CSS}
                alt="icon"
                lazy="true"
              />
              <img className="skill-icon js" src={JS} alt="icon" lazy="true" />

              <img
                className="skill-icon firebase"
                src={Fire}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon native"
                src={RN}
                alt="icon"
                lazy="true"
              />
              <img
                className="skill-icon git"
                src={Git}
                alt="icon"
                lazy="true"
              />
            </div>
          </div>
        </div>
      </Fade>
      {/* work exps */}
      <Fade>
        <div className="workex-container">
          <div className="workex-row">
            <div>{/* <p>What does he do?</p> */}</div>
            <div></div>
          </div>
        </div>
      </Fade>

      {/*project container */}
      <Fade>
        <center>
          <div className="works-container">
            <div className="work-row"></div>
            <div>
              <p>Let's Walk the Talk!</p>
              <h1>Explore Some of his works</h1>
              <br></br>
              <br></br>
              <Link to="/project">
                <button className="btnP-1">
                  <p>Click Here</p>
                </button>
              </Link>
            </div>
            {/* <div>
              <img className="freelancer" src={Freelancer} alt="dev" />
            </div> */}
          </div>
        </center>
      </Fade>
      <Fade>
        <div className="connect-container">
          <div className="connect-row">
            <div className="connect-text">
              <p>Meet and Greet!</p>
              <h1>Let’s grab a cup of coffee.</h1>
            </div>
            <div className="connect-image">
              <img src={Cal} alt="connect" />
            </div>
          </div>
          <center>
            <Link to="/contact">
              <button className="btnP-1">
                <p>Let's Connect 🚀 </p>
              </button>
            </Link>
          </center>
        </div>
      </Fade>
    </>
  );
};

export default Home;
