import React, { useState } from "react";
import Modal from "react-modal";
import "../auth/Login.css";
import Idyfy_logo from "../../../assets/svg/Idyfy_logo.svg";
import Stones from "../../../assets/svg/stones1.svg";
import Idyfy_name from "../../../assets/svg/Idyfy_name_Signup.svg";
import { isMobile } from "react-device-detect";
import AuthService from "../../../services/authservices";
import { useHistory } from "react-router-dom";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const history = useHistory();
  const [formdata, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(formdata.username, formdata.password).then(
        (res) => {
          if (res.status === 202) {
            history.push("/admin");
            closeModal();
            setFormData(initialState);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
    console.log(formdata);
  };
  // const forgotpassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await AuthService.forgotpswd(formdata.email);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  //   let subtitle;
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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }
  function closeModal() {
    setIsOpen(false);
    setFormData(initialState);
  }
  //modal end

  return (
    <div className="">
      <div className="mr-1 h-10 px-3 rounded" onClick={openModal}>
        <center>
          <img
            className="mt-20"
            src={Idyfy_logo}
            alt="IDYFY "
            style={{ height: "250px" }}
          />
        </center>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="relative m-auto container">
          <div className="row">
            <form onSubmit={handleSubmit} className="col-lg-12 col-12 right">
              <div className="flex justify-center mt-10">
                <img src={Idyfy_name} alt="IDYFY " />
              </div>
              <div className="flex justify-center">
                <h1 className="welcome mt-2 text-center">Admin</h1>
              </div>
              <div className="flex justify-center mt-4 mx-3">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="form-control form_box"
                  placeholder="User Name"
                />
              </div>
              <div className="flex justify-center mt-3 mx-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control form_box"
                  placeholder="Password"
                />
              </div>
              <div className="row mx-3 mt-5 flex justify-center">
                <button type="submit" className="col-6 h-10 mb-10 btn button">
                  Log In
                </button>
                <button
                  className="col-6 h-10 w-30 mb-40 btn button2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="row absolute bottom-0 left-0 right-0">
            <img className="stones" src={Stones} alt="Stone Art" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
