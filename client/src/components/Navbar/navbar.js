import React, { useEffect, useState } from "react";
import Idyfy_logo from "../../assets/svg/nav.svg";
import search from "../../assets/icons/search.svg";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icon/list.png";
import my_idea from "../../assets/icons/my_idea.svg";
import starred from "../../assets/icons/starred.svg";
import notifications from "../../assets/icons/notifications.svg";
import profile from "../../assets/images/dummy_profile.png";
import "../Navbar/navbar.css";
import { Link, useLocation } from "react-router-dom";
import Newidea from "../NewIdeas/newideas";
import AuthService from "../../services/authservices";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const [user, setUser] = useState("");
  const location = useLocation();
  const history = useHistory();
  const logout = () => {
    AuthService.logout();
    history.push("/");
  };
  useEffect(() => {
    setUser(AuthService.getUser);
  }, [location]);
  return (
    <div>
      <ToastContainer theme="dark" />
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#B287FF" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mr-20" to="/feed">
            <img src={Idyfy_logo} alt="IDYFY LOGO" style={{ height: "70px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img
                className="icon"
                src={list}
                alt="home"
                style={{
                  height: "30px",
                }}
              />
            </span>
          </button>
          {user ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="links home" to="/feed">
                    <div className="flex justify-center pt-2 pr-4 pl-4">
                      <img className="icon" src={home} alt="home" />
                    </div>
                    <div>
                      <h6>Home</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Newidea />
                </li>
                <li className="nav-item">
                  <Link className="links" to="/myideas">
                    <div className="flex justify-center  pt-2 pr-6 pl-6">
                      <img src={my_idea} alt="My Ideas" />
                    </div>
                    <div>
                      <h6>My Ideas</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links" to="/starred">
                    <div className="flex justify-center  pt-2 pr-10 pl-10">
                      <img src={starred} alt="Starred Ideas" />
                    </div>
                    <div>
                      <h6>Starred Ideas</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links" to="/notification">
                    <div className="flex justify-center pt-2 pr-10 pl-10">
                      <i className="image-hover">
                        <img src={notifications} alt="Notifications" />
                      </i>
                    </div>
                    <div>
                      <h6>Notifications</h6>
                    </div>
                  </Link>
                </li>
              </ul>
              <form className="d-flex justify-center">
                <input
                  type="text"
                  className="h-10 mr-2 p-1 rounded-xl z-0 focus:shadow focus:outline-none border"
                  placeholder="Search for Ideas..."
                />
                <button className="pt-1">
                  <img src={search} alt="Search" style={{ height: "20px" }} />
                </button>
              </form>
              <Link to="/profile" className="mt-2 d-flex justify-center">
                <img
                  className="ml-3 mt-1 icon dropdown-toggle"
                  src={profile}
                  alt="My Profile"
                />
              </Link>
              <button onClick={logout}>logout</button>
            </div>
          ) : (
            <div className=" d-flex justify-content-end">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form>
                  <input
                    type="text"
                    className="h-10 mr-2 p-1 rounded-xl z-0 focus:shadow focus:outline-none border"
                    placeholder="Search for Ideas..."
                  />
                  <button className="pt-1">
                    <img src={search} alt="Search" style={{ height: "20px" }} />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
