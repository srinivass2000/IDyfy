import React, { useEffect, useState } from "react";
import Idyfy_logo from "../../assets/svg/nav.svg";
import new_idea from "../../assets/icons/new_idea.svg";
import search from "../../assets/icons/search.svg";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icon/list.png";
import my_idea from "../../assets/icons/my_idea.svg";
import starred from "../../assets/icons/starred.svg";
import notifications from "../../assets/icons/notifications.svg";
import profile from "../../assets/images/dummy_profile.png";
import "../Navbar/navbar.css";
import { Link, useLocation } from "react-router-dom";
import AuthService from "../../services/authservices";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const url = "/search/";
  const [user, setUser] = useState("");
  const [searchdata, setSearchdata] = useState({ search: "" });
  const location = useLocation();
  const history = useHistory();
  const logout = () => {
    AuthService.logout();
    history.push("/");
  };
  const handleChange = (e) => {
    setSearchdata({ ...searchdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setUser(AuthService.getUser);
  }, [location]);
  return (
    <div>
      <ToastContainer theme="dark" />
      <nav
        className="navbar navbar-expand-lg"
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
                    <div className="flex justify-center pt-2 pr-10 pl-10">
                      <img className="icon" src={home} alt="home" />
                    </div>
                    <div>
                      <h6>Home</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links" to="/createIdea">
                    <div className="flex justify-center  pt-2 pr-10 pl-10">
                      <img src={new_idea} alt="Create Idea" />
                    </div>
                    <div>
                      <h6>Create Idea</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="links" to="/myideas">
                    <div className="flex justify-center  pt-2 pr-10 pl-10">
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
                  type="search"
                  className="h-10 mr-2 p-1 rounded-xl z-0 focus:shadow focus:outline-none border"
                  placeholder="Search Ideas or People...."
                  name="search"
                  onChange={handleChange}
                />
                <Link to={url + searchdata.search} className="pt-2">
                  <img src={search} alt="Search" style={{ height: "20px" }} />
                </Link>
              </form>
              {/* small screen */}
              <Link
                to="/profile"
                className="mt-2 d-flex justify-center d-lg-none"
              >
                <img
                  className="ml-3 mt-1 icon dropdown-toggle"
                  src={profile}
                  alt="My Profile"
                />
              </Link>
              {/* large */}
              <div className="dropstart  d-flex justify-center d-none d-lg-block">
                <p
                  className="mr-5"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="ml-3 mt-1 icon dropdown-toggle"
                    src={profile}
                    alt="My Profile"
                  />
                </p>

                <ul
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuButton1"
                  style={{
                    backgroundColor: "#0a0135",
                    border: "5px solid #840FCC",
                  }}
                >
                  <li className="p-1">
                    <Link
                      className="dropdown-item text-center text-white hoveritem"
                      to="/profile"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li className="flex justify-center p-1">
                    <button
                      onClick={logout}
                      className="flex justify-center text-white"
                      style={{ backgroundColor: "red" }}
                    >
                      logout
                    </button>
                  </li>
                </ul>
              </div>
              {/* small */}
              <button onClick={logout} className="d-lg-none mt-2">
                logout
              </button>
            </div>
          ) : (
            <div className=" d-flex justify-content-end">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form>
                  <input
                    type="search"
                    className="h-10 mr-2 p-1 rounded-xl z-0 focus:shadow focus:outline-none border"
                    placeholder="Search Ideas or People..."
                    name="search"
                    onChange={handleChange}
                  />
                  <Link
                    to={url + searchdata.search}
                    className="pt-2 inline-block"
                  >
                    <img src={search} alt="Search" style={{ height: "20px" }} />
                  </Link>
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
