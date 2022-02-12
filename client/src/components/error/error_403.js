import React from "react";
// import error from "../../assets/svg/404.svg";
import "../Feed_Tile/feed.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import "./error_403.css";
import "./script";
const Error = () => {
  return (
    <>
      <div className="message">You are not authorized.</div>
      <div className="message2">
        You tried to access a page you did not have prior authorization for.
      </div>
      <div className="container1">
        <div className="neon">403</div>
        <div className="door-frame">
          <div className="door">
            <div className="rectangle"></div>
            <div className="handle"></div>
            <div className="window">
              <div className="eye"></div>
              <div className="eye eye2"></div>
              <div className="leaf"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
