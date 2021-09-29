import React, { useEffect } from "react";
import EffectCard from "./EffectCard";
import "../CSS/project.css";
import Tilt from "react-tilt";
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
    { id: 0, name: "ProShop" },
    { id: 1, name: "xyz" },
    { id: 2, name: "sadj" },
    { id: 3, name: "sdj" },
    { id: 4, name: "sdj" },
    { id: 5, name: "sdj" },
  ];

  return (
    <div ref={scrollRef}>
      <section data-scroll-speed="1" data-scroll-position="top">
        <center>
          <p className="exp-text">EXPLORE MY WORKS</p>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Scroll</h1>
          <h1>up</h1>
        </center>
      </section>

      <br></br>
      <center>
        <p
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
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
      <p className="exp-text">WILL ADD MORE WORK SAMPLES SOON..</p>
    </div>
  );
};

export default Project;
