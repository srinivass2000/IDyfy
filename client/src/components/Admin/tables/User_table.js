import React from "react";
import { useState, useEffect } from "react";
//import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Navbar from "../Navbar/Navbar";
import authHeader from "../../../services/auth-header";
import axios from "axios";

const User_table = () => {
  const [idea, setIdea] = useState({});
  const [user, setUsers] = useState();

  const fetchIdea = async () => {
    await axios
      .get(`/api/admin/get-users`, {
        headers: authHeader(),
      })
      .then((res) => {
        setUsers(res.data.result);
        //setIdea(res.data.active_ideas);
        //setCount_ideas(res.data.count_ideas);
        //setCount_users(res.data.count_users);
        //setCount_comments(res.data.count_comments);
        //setContributors(res.data.contributed_users);
        console.log(res.data);
        //setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  // const userarray =[];
  // user.map((use, index) => (
  //   console.log(use)
  //  ));

  //console.log(userarray);

  useEffect(() => {
    fetchIdea();
  }, []);

  console.log(user);

  const data = {
    columns: [
      {
        label: "Sr. No.",
        field: "id",
        sort: "asc",
      },
      {
        label: "Name",
        field: "heading0",
        sort: "asc",
      },
      {
        label: "Email",
        field: "heading1",
        sort: "asc",
      },
      {
        label: "No. of Ideas",
        field: "heading2",
        sort: "asc",
      },
      {
        label: "Engage Score",
        field: "heading3",
        sort: "asc",
      },
    ],
  };

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
                  <table className="table">
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
                          <tr key={index + 1}>
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
