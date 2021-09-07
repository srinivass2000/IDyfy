import React, { useState } from "react";
import Modal from "react-modal";
import "../Auth/auth.css";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import Idyfy_name from "../../assets/svg/Idyfy_name_Signup.svg";

const SignUp = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formdata, setFormData] = useState(initialState);
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    //api put
    try {
      //   await axios.put(`http://localhost:5000/helpereditorder/${id}`, formdata);
    } catch (e) {
      console.log(e);
    }
    closeModal();
    setFormData(initialState);
  };
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  //   let subtitle;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
    },
  };
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
  }
  //modal end

  return (
    <div>
      <button className="mr-1 h-10 btn px-3 rounded button" onClick={openModal}>
        Login
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row heighty">
          <div className="col-6 left flex justify-center h-96">
            <img src={Idyfy_logo} alt="IDYFY " />{" "}
          </div>

          <div className="col-6 right">
            <div className="flex justify-center mt-10">
              <img src={Idyfy_name} alt="IDYFY " />{" "}
            </div>
            <div className="flex justify-center">
              <h1 className="text-white">
                Welcome to your professional community
              </h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
