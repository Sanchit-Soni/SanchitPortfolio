import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "../CSS/home.css";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Particles
          params={{
            particles: {
              number: {
                value: 260,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
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
                  enable: true,
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
        <div className="row-name">
          <div className="col-name">
            <h1>
              <span class="wave">👋</span>Hi I'm Sanchit!
            </h1>

            <Typed
              strings={["A Developer", "A Gamer", "A Student"]}
              typeSpeed={70}
              backSpeed={90}
              loop
            ></Typed>
            <div className="btn">
              <button className="btn-1">
                <span>Know More</span>
              </button>
              <button className="btn-1 btn-2">
                <span>Download Resume</span>
              </button>
            </div>
          </div>
          <div className="col2-name"></div>
        </div>
      </div>
      <section>
        <About />
      </section>
    </>
  );
};

export default Home;
