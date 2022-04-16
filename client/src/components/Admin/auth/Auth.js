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

  const GoBack = () => {
    history.push("/feed");
  };
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
      <div className="mr-1 h-10 px-3 rounded">
        <center>
          <img
            className="mt-20"
            src={Idyfy_logo}
            alt="IDYFY "
            style={{ height: "250px" }}
          />
          <button
            type="button"
            className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={openModal}
          >
            Login as Admin
          </button>
          <br />
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700"
            onClick={GoBack}
          >
            Go Back
          </button>
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
