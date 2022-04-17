import React from "react";
import idyfyfooter from "../../../assets/svg/idyfy_footer.svg";
import insta from "../../../assets/svg/insta.svg";
import twitter from "../../../assets/svg/twitter.svg";
import youtube from "../../../assets/svg/youtube.svg";
import { Link } from "react-router-dom";

function Footer(props) {
  let footerStyle = {
    background: "inherit",
    color: "white",
    bottom: 0,
  };

  let spanStyle = {
    margin: "3%",
    position: "relative",
    top: "30px",
  };

  return (
    <div
      className="p-4 rounded-md shadow md:flex md:items-center md:justify-between md:p-6"
      style={{ bottom: 0 }}
    >
      <span className="text-l text-white sm:text-center dark:text-gray-400">
        © 2022
        <Link to="https://idyfy.tech" className="hover:underline">
          IDyfy™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-l text-white dark:text-gray-400 md:flex md:items-center md:justify-between sm:mt-0">
        <li>
          <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/T&C" className="mr-4 hover:underline md:mr-6">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link
            // to="mailto:support@idyfy.tech"
            onClick={() => (window.location = "mailto:support@idyfy.tech")}
            className="hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>

    // <footer style={footerStyle}>
    //   <div>
    //     <div className="row" style={spanStyle}>
    //       <div className="col-3">
    //         <img src={idyfyfooter} alt=".." />
    //       </div>
    //       <div className="col-6 ">
    //         <Link to="">
    //           <span style={spanStyle}> About </span>
    //         </Link>
    //         <Link to="">
    //           <span style={spanStyle}> Features </span>
    //         </Link>
    //         <Link to="">
    //           <span style={spanStyle}> Pricing </span>
    //         </Link>
    //         <Link to="">
    //           <span style={spanStyle}> Careers </span>
    //         </Link>
    //         <Link to="">
    //           <span style={spanStyle}> Help </span>
    //         </Link>
    //         <Link to="">
    //           <span style={spanStyle}> Private Policy </span>
    //         </Link>
    //       </div>
    //       <div className="col-3"></div>
    //     </div>
    //     <div className="my-2 row">
    //       <div className="col-12">
    //         <p
    //           style={{
    //             "border-top": "2px white solid",
    //             opacity: "30%",
    //             width: "100%",
    //           }}
    //         ></p>
    //         <div className="row my-2">
    //           <div className="col-6 text-left pl-5">
    //             <p className="ml-10">
    //               copyright &copy; IDyfy. All Rights Reserved.
    //             </p>
    //           </div>
    //           <span className="col-6 pr-5">
    //             <span>
    //               <img src={insta} alt=".." align="right" className="mx-2" />
    //             </span>
    //             <span>
    //               <img src={twitter} alt=".." align="right" className="mx-2" />
    //             </span>
    //             <span>
    //               <img src={youtube} alt=".." align="right" className="mx-2" />
    //             </span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
