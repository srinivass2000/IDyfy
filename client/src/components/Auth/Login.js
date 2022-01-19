import React, { useState } from "react";
import Modal from "react-modal";
import "../Auth/auth.css";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import Stones from "../../assets/svg/stones1.svg";
import Idyfy_name from "../../assets/svg/Idyfy_name_Signup.svg";
import { isMobile } from "react-device-detect";
import AuthService from "../../services/authservices";
import { useHistory } from "react-router-dom";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
    remember: "off",
  };
  const history = useHistory();
  const [formdata, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(
        formdata.email,
        formdata.remember,
        formdata.password
      ).then((res) => {
        if (res.status === 202) {
          history.push("/feed");
          closeModal();
          setFormData(initialState);
        }
      });
    } catch (e) {
      console.log(e);
    }
    // console.log(formdata);
  };
  const forgotpassword = async (e) => {
    e.preventDefault();
    try {
      await AuthService.forgotpswd(formdata.email);
    } catch (e) {
      console.log(e);
    }
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
    <div>
      <button className="mr-1 h-10 btn px-3 rounded button" onClick={openModal}>
        Log In
      </button>
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
            <form onSubmit={handleSubmit} className="col-lg-6 col-12 right">
              <div className="flex justify-center mt-10">
                <img src={Idyfy_name} alt="IDYFY " />
              </div>
              <div className="flex justify-center">
                <h1 className="welcome mt-2 text-center">
                  Welcome to your professional community
                </h1>
              </div>
              <div className="flex justify-center ">
                <h5 className="create_text mt-2 text-center">
                  Welcome Back! Please log in to your account
                </h5>
              </div>
              <div className="flex justify-center mt-4 mx-3">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="form-control form_box"
                  placeholder="Email Address"
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
              <div className="row container mb-3 mt-3 ">
                <div className=" col-lg-6 col-12 mt-2 mb-3 custom-control custom-checkbox flex justify-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberme"
                    name="remember"
                    onChange={handleChange}
                  />
                  <label
                    className="ml-2 custom-control-label text-white"
                    htmlFor="rememberme"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="col-lg-6 col-12 mt-2 flex justify-center">
                  <p
                    onClick={forgotpassword}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded forgot"
                  >
                    forgot password?
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="mr-2 h-10 mb-10 btn button">
                  Log In
                </button>
                <button
                  className="ml-2 h-10 w-30 mb-40 btn button2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="col-6 left d-none d-lg-block">
              <center>
                <img
                  className="mt-20"
                  src={Idyfy_logo}
                  alt="IDYFY "
                  style={{ height: "250px" }}
                />
              </center>
            </div>
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
