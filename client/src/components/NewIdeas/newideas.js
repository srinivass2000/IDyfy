import React, { useState } from "react";
import Modal from "react-modal";
import "../Auth/auth.css";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import Stones from "../../assets/svg/stones1.svg";
import Idyfy_name from "../../assets/svg/Idyfy_name_Signup.svg";
import new_idea from "../../assets/icons/new_idea.svg";
import "./newideas.css";

const New_idea = () => {
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
      width: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      overflow: "hidden",
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
      <div className="flex-auto flex flex-col ml-3 mr-3">
        <a className="links home" onClick={openModal}>
          <div className="flex justify-center pt-2">
            <img src={new_idea} alt="New Idea" />
          </div>
          <div>
            <h6>New Ideas</h6>
          </div>
        </a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative m-auto container blue">
          <div className="row">
            <img
              src={Idyfy_logo}
              style={{ height: "150px" }}
              alt="IDYFY "
              className="mt-2"
            />
            <div>
              <div className="flex justify-center">
                <h1 className="mt-2 ">Create a new Idea !!</h1>
              </div>
              <div className="flex justify-center mt-3 mx-3">
                <input
                  type="text"
                  className="form-control form_box"
                  placeholder="Title"
                />
              </div>
              <div className="flex justify-center mt-3 mx-3">
                <textarea
                  rows="5"
                  cols="60"
                  name="description"
                  className="form-control form_box"
                  placeholder="Abstract"
                ></textarea>
              </div>

              <div class="ml-3 mt-2 mb-3 custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="rememberme"
                />
                <label
                  className="custom-control-label text-white"
                  for="rememberme"
                >
                  I agree to the terms and conditions{" "}
                  <a className="link">T&C</a>
                </label>
              </div>
              <div className="flex justify-center">
                <button className="mr-2 h-10 mb-10 btn button">Create</button>
                <button
                  className="ml-2 h-10 w-30 mb-40 btn button2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="row absolute bottom-0 left-0 right-0">
            <img src={Stones} alt="Stone Art" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default New_idea;
