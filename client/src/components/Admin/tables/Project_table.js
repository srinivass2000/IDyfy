import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import authHeader from "../auth/auth-header";
import axios from "axios";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import "../auth/Login.css";
//import Idyfy_logo from "../../../assets/svg/Idyfy_logo.svg";
import Stones from "../../../assets/svg/stones1.svg";
//import Idyfy_name from "../../../assets/svg/Idyfy_name_Signup.svg";
import { isMobile } from "react-device-detect";
import "./tables.css";

const Project_table = () => {
  const [ideas, setIdeas] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await AuthService.login(formdata.username, formdata.password).then(
      // (res) => {
      //   if (res.status === 202) {
      history.push("/admin/Dashboard/projects");
      closeModal();
      //setFormData(initialState);
      //    }
      //  }
      //  );
    } catch (e) {
      console.log(e);
    }
  };

  const GoBack = () => {
    history.push("/admin/users");
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
    //  setFormData(initialState);
  }

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

  const fetchIdea = () => {
    axios
      .get(`/api/admin/get-ideas`, {
        headers: authHeader(),
      })
      .then((res) => {
        setIdeas(res.data.final);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchIdea();
  }, []);

  // console.log(ideas);

  return (
    <div>
      <div className="col-12 ">
        <div className="">
          <Navbar />
        </div>
      </div>
      <div className="my-5">
        <div className="row my-3 mx-3">
          <div className="col-12">
            <div className="my-5">
              <div
                className="mx-5 mb-3 shadow-lg  rounded-2"
                style={{
                  backgroundColor: "midnightblue",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              >
                <div class="d-flex justify-content-center my-9">
                  PROJECT TABLE
                </div>
              </div>

              <div
                className="mx-5 shadow-lg rounded"
                style={{ background: "white" }}
              >
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Idea Name</th>
                        <th>No. of Contributors</th>
                        <th>No. of Likes</th>
                        <th>No. of Shares</th>
                        <th>No. of Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ideas ? (
                        ideas.map((idea, index) => (
                          <tr key={index + 1} onClick={openModal}>
                            <td>{index + 1}</td>
                            <td>{idea.title}</td>
                            <td>{idea.contributors.length}</td>
                            <td>{idea.liked_users.length}</td>
                            <td>{idea.shares.length}</td>
                            <td>{idea.comment_count}</td>
                            
                            <Modal
                              isOpen={modalIsOpen}
                              // onAfterOpen={afterOpenModal}
                              onRequestClose={closeModal}
                              style={customStyles}
                              contentLabel="Example Modal"
                              ariaHideApp={false}
                            >
                              <div
                                className="relative  rounded"
                                style={{
                                  background:
                                    "linear-gradient(75deg, rgb(4, 4, 4), midnightblue)",
                                }}
                              >
                                <div className="row">
                                  <div className="col-lg-12 col-12 px-4 py-9 container">
                                    <div className="flex justify-center mt-4">
                                      <div>
                                        <h1
                                          className="my-2 mb-3 text-center"
                                          style={{
                                            color: "white",
                                            fontSize: "2rem",
                                          }}
                                        >
                                          {idea.title}
                                        </h1>
                                      </div>
                                    </div>
                                    {/* <div className="flex justify-left">
                                      <h1
                                        className="my-1 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1.2rem",
                                        }}
                                      >
                                        Description
                                      </h1>
                                    </div> */}
                                    <div className="flex justify-center">
                                      <h1
                                        className="my-1 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        {idea.description}
                                      </h1>
                                    </div>
                                    <div className="flex justify-left">
                                      <h1
                                        className="my-2 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        Likes : {idea.liked_users.length}
                                      </h1>
                                    </div>
                                    <div className="flex justify-left">
                                      <h1
                                        className="my-2 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        Shares : {idea.shares.length}
                                      </h1>
                                    </div>
                                    <div className="flex justify-left">
                                      <h1
                                        className="my-2 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        Contributors :{" "}
                                        {idea.contributors.length}
                                      </h1>
                                    </div>
                                    <div className="flex justify-left">
                                      <h1
                                        className="my-2 ml-3 text-left"
                                        style={{
                                          color: "white",
                                          fontSize: "1rem",
                                        }}
                                      >
                                        Stars :{idea.starred_by.length}
                                      </h1>
                                    </div>

                                    <div className="row mx-3 mt-5 flex justify-center">
                                      <div className="col-4   flex justify-center">
                                        <button
                                          className="button-6"
                                          style={{ background: "#FF9900" }}
                                          onClick={GoBack}
                                        >
                                          Warn
                                        </button>
                                      </div>
                                      <div className="col-4   flex justify-center">
                                        <button
                                          className="button-6"
                                          style={{ background: "#EE0000" }}
                                          onClick={GoBack}
                                        >
                                          Delete
                                        </button>
                                      </div>
                                      <div className="col-4  flex justify-center">
                                        <button
                                          className="button-6"
                                          style={{ background: "#222222" }}
                                          onClick={GoBack}
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                 <div className="">
                                  <img
                                    className="stones"
                                    src={Stones}
                                    alt="Stone Art"
                                  />
                                </div> 
                              </div>
                            </Modal>
                          </tr>
                        ))
                      ) : (
                        <>
                          <div
                            className="spinner-border place-content-center"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_table;
