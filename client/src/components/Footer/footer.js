import React from "react";
// import idyfyfooter from "../../assets/svg/idyfy_footer.svg";
// import insta from "../../assets/svg/insta.svg";
// import twitter from "../../assets/svg/twitter.svg";
// import youtube from "../../assets/svg/youtube.svg";
// import { Link } from "react-router-dom";
import Stones from "../../assets/svg/stones1.svg";

// let footerStyle = {
//   background: "#3C0168",
//   color: "white",
//   position: "fixed",
//   bottom: 0,
//   width: "100%",
// };

// let spanStyle = {
//   margin: "3%",
//   position: "relative",
//   top: "30px",
// };

const Footer = () => {
  return (
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
    //       <div className="col-2"></div>
    //       <div className="col-8">
    //         <p style={{ "border-top": "2px white solid", opacity: "30%" }}></p>
    //         <div className="row my-2">
    //           <div className="col-6 text-left pl-5">
    //             <p>copyright &copy; IDyfy. All Rights Reserved.</p>
    //           </div>
    //           <div className="col-6 pr-5">
    //             <span>
    //               <img src={insta} alt=".." align="right" className="mx-2" />
    //             </span>
    //             <span>
    //               <img src={twitter} alt=".." align="right" className="mx-2" />
    //             </span>
    //             <span>
    //               <img src={youtube} alt=".." align="right" className="mx-2" />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-2"></div>
    //     </div>
    //   </div>
    // </footer>
    <div>
        <img src={Stones} alt="footer" style={{ width: "100%" }} />
    </div>
  );
};

export default Footer;
