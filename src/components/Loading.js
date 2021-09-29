import React from "react";
import "../CSS/loading.css";
const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader loader-1">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default Loading;
