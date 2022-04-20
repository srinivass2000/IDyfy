import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import authHeader from "../auth/auth-header";
import axios from "axios";
import Modal from "react-modal";
import "../auth/Login.css";
import Stones from "../../../assets/svg/stones1.svg";
import { isMobile } from "react-device-detect";
//import { useHistory } from "react-router-dom";
import "./tables.css";

const User_table = () => {
  const [user, setUsers] = useState();
  //const history = useHistory();

  const GoBack = () => {
    window.location.reload(false);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const fetchIdea = async () => {
    //const history = useHistory();
    await axios
      .get(`/api/admin/get-users`, {
        headers: authHeader(),
      })
      .then((res) => {
        setUsers(res.data.result);

        //console.log(res.data);
      })
      .catch((err) => console.log(err));
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

  console.log(user);

  
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
                <div class="d-flex justify-content-center my-9">USER TABLE</div>
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
                        <th>Email</th>
                        <th>Following</th>
                        <th>Followers</th>
                        <th>Ideas Contributed</th>
                        <th>Engagement Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user ? (
                        user.map((use, index) => (
                          <tr key={index + 1} onClick={openModal}>
                            <td>{index + 1}</td>
                            <td>{use.name}</td>
                            <td>{use.email}</td>
                            <td>{use.ideas_contributed.length}</td>
                            <td>{use.following.length}</td>
                            <td>{use.followers.length}</td>
                            <td>
                              {use.engagement_score
                                ? use.engagement_score.toFixed(2)
                                : "N.A"}
                            </td>
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
                                    <div className="flex justify-center ">
                                      <img
                                        src={use.profile_pic}
                                        alt="Profile Pic "
                                      />
                                    </div>
                                    <div className="flex justify-center mt-4">
                                      <div>
                                        <h1
                                          className="my-2 mb-3 text-center"
                                          style={{
                                            color: "white",
                                            fontSize: "2rem",
                                          }}
                                        >
                                          {use.name}
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
                                        {use.job}
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
                                        Ideas Contributed :{" "}
                                        {use.ideas_contributed.length}
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
                                        Followers : {use.followers.length}
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
                                        Following :{use.following.length}
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
                            <span class="visually-hidden">Loading...</span>
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

export default User_table;
