import React from "react";
// import { useState, useEffect } from "react";
// import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
// import Navbar from "../Navbar/Navbar";

const User_table = () => {
  // const [ideas, setIdeas] = useState([]);
  // const [user, setUser] = useState({});

  // const data = {
  //   columns: [
  //     {
  //       label: 'Sr. No.',
  //       field: 'id',
  //       sort: 'asc'
  //     },
  //     {
  //       label: 'Name',
  //       field: 'heading0',
  //       sort: 'asc'
  //     },
  //     {
  //       label: 'Email',
  //       field: 'heading1',
  //       sort: 'asc'
  //     },
  //     {
  //       label: 'No. of Ideas',
  //       field: 'heading2',
  //       sort: 'asc'
  //     },
  //     {
  //       label: 'Engage Score',
  //       field: 'heading3',
  //       sort: 'asc'
  //     },
  //   ],
  //   rows: [
  //     {
  //       'id': 1,
  //       'heading0': 'Cell',
  //       'heading1': 'Cell',
  //       'heading2': 'Cell',
  //       'heading3': 'Cell',
  //     },
  //     {
  //       'id': 2,
  //       'heading0': 'Cell',
  //       'heading1': 'Cell',
  //       'heading2': 'Cell',
  //       'heading3': 'Cell',
  //     },
  //     {
  //       'id': 3,
  //       'heading0': 'Cell',
  //       'heading1': 'Cell',
  //       'heading2': 'Cell',
  //       'heading3': 'Cell',
  //     }
  //   ]
  // };

  return (
    // <div>
    //     <div class="my-5">
    //     <div className="row my-3 mx-3">

    //     <div class="col-2 ">
    //         <div class="">
    //           <Navbar/>
    //         </div>

    //       </div>
    //     <div  class="col-10 ">
    //       <div class="my-5">
    //       <div
    //         className="mx-5 mb-3 shadow-lg  rounded-2"
    //         style={{ backgroundColor: "#BF51FF", color: "white", "fontWeight":"bolder" ,"fontSize":"2rem"}}
    //       >
    //         USER TABLE
    //       </div>

    //       <div class="mx-5 shadow-lg rounded" style={{"background":"white"}}>
    //       <MDBTable responsive>
    //         <MDBTableHead columns={data.columns} style={{backgroundColor: "#B787FF"}}/>
    //         <MDBTableBody rows={data.rows} />
    //       </MDBTable>
    //       </div>
    //     </div>
    //   </div>

    //   </div>
    //   </div>
    // </div>

    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">
                  Authors table
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Author
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Function
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Employed
                      </th>
                      <th className="text-secondary opacity-7" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user1"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">John Michael</h6>
                            <p className="text-xs text-secondary mb-0">
                              john@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                        <p className="text-xs text-secondary mb-0">
                          Organization
                        </p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">
                          Online
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          23/04/18
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-3.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user2"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Alexa Liras</h6>
                            <p className="text-xs text-secondary mb-0">
                              alexa@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">
                          Programator
                        </p>
                        <p className="text-xs text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">
                          Offline
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          11/01/19
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-4.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user3"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                            <p className="text-xs text-secondary mb-0">
                              laurent@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">
                          Executive
                        </p>
                        <p className="text-xs text-secondary mb-0">Projects</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">
                          Online
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          19/09/17
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-3.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user4"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Michael Levi</h6>
                            <p className="text-xs text-secondary mb-0">
                              michael@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">
                          Programator
                        </p>
                        <p className="text-xs text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">
                          Online
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          24/12/08
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user5"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Richard Gran</h6>
                            <p className="text-xs text-secondary mb-0">
                              richard@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                        <p className="text-xs text-secondary mb-0">Executive</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">
                          Offline
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          04/10/21
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src="../assets/img/team-4.jpg"
                              className="avatar avatar-sm me-3 border-radius-lg"
                              alt="user6"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Miriam Eric</h6>
                            <p className="text-xs text-secondary mb-0">
                              miriam@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">
                          Programator
                        </p>
                        <p className="text-xs text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">
                          Offline
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          14/09/20
                        </span>
                      </td>
                      <td className="align-middle">
                        <a
                          href="javascript:;"
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit user"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_table;
