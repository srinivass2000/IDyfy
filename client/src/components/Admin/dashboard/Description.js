import React, { useState } from "react";
import Modal from "react-modal";
import "../auth/Login.css";
import Idyfy_logo from "../../../assets/svg/Idyfy_logo.svg";
import Stones from "../../../assets/svg/stones1.svg";
import Idyfy_name from "../../../assets/svg/Idyfy_name_Signup.svg";
import { isMobile } from "react-device-detect";
import AuthService from "../../../services/authservices";
import { useHistory } from "react-router-dom";

const Description = (props) => {

  let customStyles;
  if (isMobile) {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "80%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        overflow: "hidden",
      },
    };
  } else {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "30%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        overflow: "hidden",
      },
    };
  }
  

  return (
    <div className="">

      
        <div className="relative m-auto container">
          <div className="row">
            <form  className="col-lg-12 col-12 right">
              <div className="flex justify-center mt-10">
                <h1>{props.details.title}</h1>
              </div>
              <div className="flex justify-center">
                <h1 className="welcome mt-2 text-center">Admin</h1>
              </div>
              
            </form>
          </div>
          <div className="row absolute bottom-0 left-0 right-0">
            <img className="stones" src={Stones} alt="Stone Art" />
          </div>
        </div>
    </div>
  );
};

export default Description;
