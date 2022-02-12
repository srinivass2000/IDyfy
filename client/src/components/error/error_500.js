import React from "react";
// import error from "../../assets/svg/404.svg";
import "../Feed_Tile/feed.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import "./error_500.css";
import "./script";
const Error_500 = () => {
  return (
    <>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>500 - Internal Server Error</h2>
            {/* <p> Please try again later</p> */}
          </div>
          <Link class="link" to="/">
            Go TO Homepage
          </Link>
        </div>
      </div>
    </>
  );
};
export default Error_500;
