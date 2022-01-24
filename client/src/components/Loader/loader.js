import React from "react";
import "../Loader/loader.css";

const Loader = () => {
  return (
    <div class="cube-wrapper">
      <div class="cube-folding">
        <span class="leaf1"></span>
        <span class="leaf2"></span>
        <span class="leaf3"></span>
        <span class="leaf4"></span>
      </div>
      <p class="loading" data-name="Loading">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
