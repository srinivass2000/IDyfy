import React from "react";
import error from "../../assets/svg/404.svg";
import "../Feed_Tile/feed.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
const Error = () => {
  return (
    <>
      <div className="container">
        {/* <div className="row ">
          <div className="offset-lg-4 col-lg-4 offset-1 col-10 flex justify-center">
            <img src={Idyfy_logo} alt="404" />
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-4 col-lg-4 offset-1 col-10  flex justify-center">
            <img src={Idyfy_name} alt="404" />
          </div>
        </div> */}
        <div className="row mt-2">
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
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Error;
