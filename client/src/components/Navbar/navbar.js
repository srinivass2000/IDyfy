import React from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import Idyfy_name from "../../assets/svg/Idyfy_name.svg";
import search from "../../assets/icons/search.svg";
import home from "../../assets/icons/home.svg";
import my_idea from "../../assets/icons/my_idea.svg";
import new_idea from "../../assets/icons/new_idea.svg";
import starred from "../../assets/icons/starred.svg";
import notifications from "../../assets/icons/notifications.svg";
import profile from "../../assets/images/dummy_profile.png";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className="flex content-center mb-5"
        style={{ backgroundColor: "#B287FF" }}
      >
        <div className="ml-5">
          <img src={Idyfy_logo} alt="IDYFY LOGO" />
        </div>
        <div className="pt-4 ml-3">
          <img src={Idyfy_name} alt="IDYFY NAME" />
        </div>
        <div className="relative pt-3">
          <input
            type="text"
            className="ml-3 h-12 w-96 pr-8 pl-5 mr-2 rounded-xl z-0 focus:shadow focus:outline-none border"
            placeholder="Search for Ideas..."
          />
          <div className="absolute top-2 right-6 pt-4">
            {" "}
            <img src={search} alt="Search" />{" "}
          </div>
        </div>
        <div className="flex-auto flex flex-col">
          <Link className="links home" to="/feed">
            <div className="flex justify-center pt-3">
              <img className="icon" src={home} alt="home" />
            </div>
            <div>
              <h6>Home</h6>
            </div>
          </Link>
        </div>
        <div className="flex-auto flex flex-col">
          <div className="flex justify-center pt-3">
            <img src={new_idea} alt="New Idea" />
          </div>
          <div>
            <h6>New Idea</h6>
          </div>
        </div>
        <div className="flex-auto flex flex-col">
          <Link className="links" to="/myideas">
            <div className="flex justify-center pt-3">
              <img src={my_idea} alt="My Ideas" />
            </div>
            <div>
              <h6>My Ideas</h6>
            </div>
          </Link>
        </div>

        <div className="flex-auto flex flex-col">
          <Link className="links" to="/starred">
            <div className="flex justify-center pt-3">
              <img src={starred} alt="Starred Ideas" />
            </div>
            <div>
              <h6>Starred Ideas</h6>
            </div>
          </Link>
        </div>
        <div className="flex-auto flex flex-col">
          <Link className="links" to="/notification">
            <div className="flex justify-center pt-3">
              <i className="image-hover"><img src={notifications} alt="Notifications" /></i>
            </div>
            <div>
              <h6>Notifications</h6>
            </div>
          </Link>
        </div>
        <div className="flex-auto flex flex-col">
          <Link className="links" to="/profile">
            <div className="flex justify-center pt-3">
              <img src={profile} alt="My Profile" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
