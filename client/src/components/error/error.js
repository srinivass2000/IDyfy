import React from "react";
// import error from "../../assets/svg/404.svg";
import "../Feed_Tile/feed.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import "./error.css";
import "./script";
const Error = () => {
  return (
    <>
      <div className="container">
        {/* <div className="row mt-2">
          <div className="offset-lg-4 col-lg-4 offset-1 col-10  flex justify-center">
            <img src={error} alt="404" style={{ height: "40rem" }} />
          </div>
        </div>
        <div className="row ">
          <div className="text-white offset-lg-4 col-lg-4 offset-1 col-10  flex justify-center">
            <p style={{ fontSize: "40px" }}>404</p>
          </div>
        </div>
        <p className="text-white">
          Sorry, you are not authorized to access this page.
        </p>
        <div className="row mt-3">
          <div className="text-white offset-lg-4 col-lg-4 offset-1 col-10  flex justify-center">
            <Link to="/feed">
              <button className="btn btn-outline-danger">Back Home</button>
            </Link>
          </div>
        </div> */}
        <div className="ag-page-404">
          <div className="ag-toaster-wrap">
            <div className="ag-toaster">
              <div className="ag-toaster_back"></div>
              <div className="ag-toaster_front">
                <div className="js-toaster_lever ag-toaster_lever"></div>
              </div>
              <div className="ag-toaster_toast-handler">
                <div className="ag-toaster_shadow"></div>
                <div className="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
              </div>
            </div>

            <canvas id="canvas-404" className="ag-canvas-404"></canvas>
            <img
              className="ag-canvas-404_img"
              alt="Toaster"
              src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/404-error-smoke-from-toaster/images/smoke.png"
            />
          </div>
        </div>
        <p className="text-white text-xl">
          Sorry, you are not authorized to access this page.
        </p>
        <div className="row mt-3">
          <div className="text-white offset-lg-4 col-lg-4 offset-1 col-10  flex justify-center">
            <Link to="/feed">
              <button className="btn btn-outline-danger">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Error;
