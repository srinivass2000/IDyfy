import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import authHeader from "../auth/auth-header";
import axios from "axios";
import Modal from "react-modal";
import "../auth/Login.css";
import Stones from "../../../assets/svg/stones1.svg";
import { isMobile } from "react-device-detect";
import "./tables.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Project_table = () => {
  const notify1 = () => toast.success("Warned all Contributors!");
  const notify2 = () => toast.success("Idea Deleted!");
  const notify3 = (text) => toast.error(text);

  const [ideas, setIdeas] = useState();
  const [idea, setIdea] = useState();
  const [disable_warn, setDisableWarn] = useState(false);
  const [disable_delete, setDisableDelete] = useState(false);

  //const [user, setUsers] = useState();
  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = (idea) => {
    setIsOpen(true);
    setIdea(idea);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchIdea = async () => {
    await axios
      .get(`/api/admin/get-ideas`, {
        headers: authHeader(),
      })
      .then((res) => {
        setIdeas(res.data.final);
      })
      .catch((err) => console.log(err));
  };

  const WarnContributors = async () => {
    setDisableWarn(true);
    await axios
      .get(`/api/admin/send-warning-email?idea_id=${idea._id.toString()}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        notify1();
      })
      .catch((err) => {
        notify3(err.response.data.error);
        // notify();
        console.log(err);
      });
  };

  const DeleteIdea = async () => {
    setDisableDelete(true);
    await axios
      .get(`/api/admin/delete-idea?idea_id=${idea._id.toString()}`, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        notify2();
        fetchIdea();
      })
      .catch((err) => {
        notify3(err.response.data.error);
        // notify();
        console.log(err);
      });
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

  useEffect(() => {
    fetchIdea();
  }, []);

  // console.log(user);

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
                className="mx-5 mb-3 shadow-lg  rounded-2 "
                style={{
                  backgroundColor: "midnightblue",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              >
                <div class="d-flex justify-content-center my-9">
                  PROJECTS TABLE
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
                        <th>Name</th>
                        <th>Conributors</th>
                        <th>Likes</th>
                        <th>Shares</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ideas ? (
                        ideas.map((idea, index) => (
                          <>
                            <tr key={index + 1} onClick={() => openModal(idea)}>
                              <td>{index + 1}</td>
                              <td>{idea.title}</td>
                              <td>{idea.contributors.length}</td>
                              <td>{idea.liked_users.length}</td>
                              <td>{idea.shares.length}</td>
                              <td>{idea.comment_count}</td>
                            </tr>
                          </>
                        ))
                      ) : (
                        <>
                          <div
                            className="spinner-border place-content-center"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </>
                      )}
                    </tbody>
                  </table>
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
                      {idea ? (
                        <>
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
                              <div className="flex justify-center">
                                <h1
                                  className="my-1 ml-3 text-left"
                                  style={{
                                    color: "white",
                                    fontSize: "1rem",
                                  }}
                                >
                                  {removeHTML(idea.description)}
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
                                  Contributors : {idea.contributors.length}
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
                                <div className="col-3   flex justify-center">
                                  {disable_warn ? (
                                    <button
                                      className="button-6 button-warn"
                                      onClick={() => WarnContributors()}
                                      disabled={disable_warn}
                                      // style={{ background: "#FF9900" }}
                                    >
                                      Warn
                                    </button>
                                  ) : (
                                    <button
                                      className="button-6 button-warn"
                                      onClick={() => WarnContributors()}
                                      disabled={disable_warn}
                                      style={{ background: "#FF9900" }}
                                    >
                                      Warn
                                    </button>
                                  )}
                                </div>
                                <div className="col-3   flex justify-center">
                                  {disable_delete ? (
                                    <button
                                      className="btn-disabled button-6"
                                      // style={{ background: "#EE0000" }}
                                      onClick={() => DeleteIdea()}
                                      disable={disable_delete}
                                    >
                                      Delete
                                    </button>
                                  ) : (
                                    <button
                                      className="button-6"
                                      style={{ background: "#EE0000" }}
                                      onClick={() => DeleteIdea()}
                                      disabled={disable_delete}
                                    >
                                      Delete
                                    </button>
                                  )}
                                </div>
                                <div className="col-3  flex justify-center">
                                  <Link to={`/graph/${idea._id.toString()}`}>
                                    <button
                                      className="button-6 bg-green-600"
                                      // style={{ background: "#222222" }}
                                    >
                                      Graph
                                    </button>
                                  </Link>
                                </div>
                                <div className="col-3  flex justify-center">
                                  <button
                                    className="button-6 text-white"
                                    style={{ background: "#222222" }}
                                    onClick={closeModal}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                              {disable_warn === true ? (
                                <>
                                  <h3 className="text-white mt-4 text-center">
                                    Warned all Contributors of this idea!
                                  </h3>
                                </>
                              ) : (
                                <></>
                              )}
                              {disable_delete === true ? (
                                <>
                                  <h3 className="text-white mt-4 text-center">
                                    Deleted All features and Idea Successfully!.
                                  </h3>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>

                          <div className="">
                            <img
                              className="stones"
                              src={Stones}
                              alt="Stone Art"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="spinner-border place-content-center"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </>
                      )}
                    </div>
                  </Modal>
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
