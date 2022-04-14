import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="">
        <ul className="mcd-menu bg-white">
          <div className="">
            <center>
              <div className="py-4 d-none d-lg-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6rem"
                  height="6rem"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              <span className="d-none d-lg-block man">Tejas Zambaulikar</span>
            </center>
          </div>
          <hr
            className="mt-3"
            style={{ height: "4px", background: "purple" }}
          />
          <li>
            <Link to="/admin">
              <strong>
                <div className="row">
                  <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-back"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                    </svg>
                  </div>
                  <div className="col-10 d-none d-lg-block man">Dashboard</div>
                </div>
              </strong>
            </Link>
          </li>
          <li>
            <Link to="/admin/projects">
              <strong>
                <div className="row">
                  <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-terminal-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z" />
                    </svg>
                  </div>
                  <div className="col-10 d-none d-lg-block man">Projects</div>
                </div>
              </strong>
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <strong>
                <div className="row">
                  <div className="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                      />
                      <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                  </div>

                  <div className="col-md-10 d-none d-lg-block man">Users</div>
                </div>
              </strong>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
