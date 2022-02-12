import React from "react";
import "../Loader/loader.css";

const Loader = () => {
  return (
    <div className="cube-wrapper">
      <div className="cube-folding">
        <span className="leaf1"></span>
        <span className="leaf2"></span>
        <span className="leaf3"></span>
        <span className="leaf4"></span>
      </div>
      <p className="loading" data-name="Loading">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
