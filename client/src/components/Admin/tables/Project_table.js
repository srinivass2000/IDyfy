import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import authHeader from "../../../services/auth-header";
import axios from "axios";

const Project_table = () => {
  const [ideas, setIdeas] = useState([]);

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
      <div className="my-5">
        <div className="row my-3 mx-3">
          <div className="col-2 ">
            <div className="">
              <Navbar />
            </div>
          </div>
          <div className="col-10 ">
            <div className="my-5">
              <div
                className="mx-5 mb-3 shadow-lg  rounded-2"
                style={{
                  backgroundColor: "#BF51FF",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              >
                PROJECT TABLE
              </div>

              <div
                className="mx-5 shadow-lg rounded"
                style={{ background: "white" }}
              >
                <div className="table-responsive">
                  <table className="table">
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
                          <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{idea.title}</td>
                            <td>{idea.contributors.length}</td>
                            <td>{idea.liked_users.length}</td>
                            <td>{idea.shares.length}</td>
                            <td>{idea.comment_count}</td>
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

export default Project_table;
