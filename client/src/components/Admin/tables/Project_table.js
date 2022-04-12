import React from "react";
import { useState, useEffect } from "react";
// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Navbar from "../Navbar/Navbar";
import "../material-dashboard.css";

const Project_table = () => {
  //     const [ideas, setIdeas] = useState([]);
  //     const [user, setUser] = useState({});

  //     const data = {
  //       columns: [
  //         {
  //           label: 'Sr. No.',
  //           field: 'id',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'Idea Name',
  //           field: 'heading0',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'No. of Contributors',
  //           field: 'heading1',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'No. of Likes',
  //           field: 'heading2',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'No. of Comments',
  //           field: 'heading3',
  //           sort: 'asc'
  //         },
  //         {
  //           label: 'Heading',
  //           field: 'heading8',
  //           sort: 'asc'
  //         }
  //       ],
  //       rows: [
  //         {
  //           'id': 1,
  //           'heading0': 'Cell',
  //           'heading1': 'Cell',
  //           'heading2': 'Cell',
  //           'heading3': 'Cell',
  //           'heading4': 'Cell',
  //         },
  //         {
  //           'id': 2,
  //           'heading0': 'Cell',
  //           'heading1': 'Cell',
  //           'heading2': 'Cell',
  //           'heading3': 'Cell',
  //           'heading4': 'Cell',
  //         },
  //         {
  //           'id': 3,
  //           'heading0': 'Cell',
  //           'heading1': 'Cell',
  //           'heading2': 'Cell',
  //           'heading3': 'Cell',
  //           'heading4': 'Cell',
  //         }
  //       ]
  //     };

  //   return (
  //     <div>
  //        <div class="my-5">
  //         <div className="row my-3 mx-3">

  //         <div class="col-2 ">
  //             <div class="">
  //               <Navbar/>
  //             </div>

  //           </div>
  //         <div  class="col-10 ">
  //           <div class="my-5">
  //           <div
  //             className="mx-5 mb-3 shadow-lg  rounded-2"
  //             style={{ backgroundColor: "#BF51FF", color: "white", "fontWeight":"bolder" ,"fontSize":"2rem"}}
  //           >
  //             PROJECT TABLE
  //           </div>

  //           <div class="mx-5 shadow-lg rounded" style={{"background":"white"}}>
  //           <MDBTable responsive>
  //             <MDBTableHead columns={data.columns} style={{backgroundColor: "#B787FF"}}/>
  //             <MDBTableBody rows={data.rows} />
  //           </MDBTable>
  //           </div>
  //         </div>
  //       </div>

  //       </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">
                  Projects table
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Project
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Budget
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Status
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">
                        Completion
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/logo-asana.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="spotify"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Asana</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$2,500</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">
                          working
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            60%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-info"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0">
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/github.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="invision"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Github</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$5,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">done</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            100%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-success"
                                role="progressbar"
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-link text-secondary mb-0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/logo-atlassian.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="jira"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Atlassian</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$3,400</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">
                          canceled
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            30%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-danger"
                                role="progressbar"
                                aria-valuenow={30}
                                aria-valuemin={0}
                                aria-valuemax={30}
                                style={{ width: "30%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-link text-secondary mb-0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/bootstrap.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="webdev"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Bootstrap</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$14,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">
                          working
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            80%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-info"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={80}
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-link text-secondary mb-0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/logo-slack.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="slack"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Slack</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$1,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">
                          canceled
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            0%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-success"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={0}
                                style={{ width: "0%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-link text-secondary mb-0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img
                              src="../assets/img/small-logos/devto.svg"
                              className="avatar avatar-sm rounded-circle me-2"
                              alt="xd"
                            />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Devto</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$2,300</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">done</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">
                            100%
                          </span>
                          <div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-gradient-success"
                                role="progressbar"
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button
                          className="btn btn-link text-secondary mb-0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-xs" />
                        </button>
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

export default Project_table;
