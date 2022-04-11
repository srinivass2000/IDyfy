import React, { useState } from "react";
import Modal from "react-modal";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import Stones from "../../assets/svg/stones1.svg";
import Idyfy_name from "../../assets/svg/Idyfy_name_Signup.svg";
import { isMobile } from "react-device-detect";
import AuthService from "../../services/authservices";
import { useHistory } from "react-router-dom";
import profile from "../../assets/svg/Dummy_Profile2.svg";

const OtherContributers = (props) => {
  //   let subtitle;
  let customStyles;
  if (isMobile) {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "90%",
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
        width: "50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        overflow: "hidden",
      },
    };
  }

  const selectWhoseIdea = (id) => {
    props.SetWhosegraph(id);
    closeModal();
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //modal end

  return (
    <div>
      <button
        className="mr-1 h-10 btn px-3 rounded button bg-success text-white"
        onClick={openModal}
      >
        Contributers
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className>
          <div
            className="row justify-center p-2 text-white"
            style={{ "background-color": " #840fcc" }}
          >
            Idea name
          </div>
          <div className="row" style={{ "background-color": "#B287FF" }}>
            <div className="col-6 ">
              <div className="row flex justify-center">
                <div className="row flex justify-center text-white">
                  Heighest Contributer
                </div>
                <img src={profile} alt="My Profile" className="profileimage" />
              </div>
              <div className="row flex justify-center">name</div>
            </div>
            <div className="col-6 ">
              <p className="row flex justify-center">Checkout others work</p>
              <div class="dropdown mt-2  flex justify-center">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Contributers
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li onClick={() => selectWhoseIdea(/*id*/)}>
                    <a class="dropdown-item">Lex</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OtherContributers;
