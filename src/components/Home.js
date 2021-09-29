import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "../CSS/home.css";
// import About from "./About";
import Loading from "./Loading";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1750);
  }, [loading]);

  if (loading) return <Loading />;

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
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 4,
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
        <div className="row-name ">
          <Tilt className="Tilt cursor-pointer" options={{ max: 15 }}>
            <div className="col-name swing">
              {/* <div className="col-name gradient-border"> */}
              <p>
                Hey! I'm Sanchit<span className="wave">👋</span>
              </p>

              <Typed
                className="text"
                strings={["A Developer", "A Gamer", "A Student"]}
                typeSpeed={70}
                backSpeed={90}
                loop
              ></Typed>
              <div className="btn">
                <Tilt className="Tilt cursor-pointer" options={{ max: 15 }}>
                  <Link to="/about">
                    <button className="btn-1">
                      <h4>Know More</h4>
                    </button>
                  </Link>

                  <button className="btn-1 btn-2">
                    <h4>Download Resume</h4>
                  </button>
                </Tilt>
              </div>
            </div>
          </Tilt>
          {/* <div className="col2-name"></div> */}
        </div>
      </div>
      {/* <section>
        <About />
      </section> */}
    </>
  );
};

export default Home;
