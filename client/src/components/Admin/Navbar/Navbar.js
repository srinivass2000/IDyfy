import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar1.css";
import { useState, useEffect } from "react";
import AuthService from "../auth/authservices";
import { useHistory } from "react-router-dom";


const Navbar = () => {

  const logout = () => {
    AuthService.logout();
    history.push("/");
  };
  const history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items mx-9">
              <Link to="/admin/dashboard">Home</Link>
            </li>
            <li className="items mx-9">
              <Link to="/admin/projects">Projects</Link>
            </li>
            <li className="items mx-9">
              <Link to="/admin/users">Users</Link>
            </li>
            <div className="items mx-9" onClick={logout}>
              <button className="button-6" >Log out</button>
            </div>
          </ul>
          
        )}

        <button onClick={toggleNav} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-columns-gap"
            viewBox="0 0 16 16"
          >
            <path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
