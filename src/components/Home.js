import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "../CSS/home.css";
import About from "./About";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Particles
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
                direction: "right",
                speed: 0.05,
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
        />

        {/* <Particles
          params={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: true,
                  value_area: 600,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 2,
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
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
                    height: 20,
                    width: 27,
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
                    height: 20,
                    width: 27,
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

        <div className="row-name ">
          <div className="col-name">
            {/* <div className="col-name gradient-border"> */}
            <h1>
              Hey! I'm Sanchit<span className="wave">👋</span>
            </h1>

            <Typed
              className="text"
              strings={["A Developer", "A Gamer", "A Student"]}
              typeSpeed={70}
              backSpeed={90}
              loop
            ></Typed>
            <div className="btn">
              <button className="btn-1">
                <h4>Know More</h4>
              </button>
              <button className="btn-1 btn-2">
                <h4>Download Resume</h4>
              </button>
            </div>
          </div>
          {/* <div className="col2-name"></div> */}
        </div>
      </div>
      <section>
        <About />
      </section>
    </>
  );
};

export default Home;
