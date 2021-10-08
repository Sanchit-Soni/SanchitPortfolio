import React from "react";
import { Fade } from "react-reveal";
import "../CSS/loading.css";
const Loading = () => {
  return (
    <Fade>
      <div className="loader-container">
        <h1 className="loading-text" data-text="Loading...">
          Loading...
        </h1>
      </div>
    </Fade>
  );
};

export default Loading;
