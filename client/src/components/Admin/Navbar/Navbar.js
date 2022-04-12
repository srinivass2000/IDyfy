// import { MDBNavLink } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
// import "../Navbar/Navbar.css";
import "../material-dashboard.css";
const Navbar = () => {
  return (
    <div class="container">
      {/* <nav>
        <ul class="mcd-menu">
          <div>
            <center>
              <div class="py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="76"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              Tejas Zambaulikar
            </center>
          </div>
          <hr class="mt-3" style={{ height: "4px", background: "purple" }} />
          <li>
            <Link to="/admin">
              <center>
                <strong>Dashboard</strong>
              </center>
            </Link>
          </li>
          <li>
            <Link to="/admin/projects">
              <center>
                <strong>Projects</strong>
              </center>
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <center>
                <strong>Users</strong>
              </center>
            </Link>
          </li>
        </ul>
      </nav>
    </div> */}
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <a
            className="navbar-brand m-0"
            href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold text-white">
              Material Dashboard 2
            </span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white "
                href="../pages/dashboard.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white active bg-gradient-primary"
                href="../pages/tables.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/billing.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Billing</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white "
                href="../pages/virtual-reality.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/rtl.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white "
                href="../pages/notifications.html"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Notifications</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/profile.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/sign-in.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="../pages/sign-up.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a
              className="btn bg-gradient-primary mt-4 w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              Upgrade to pro
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
