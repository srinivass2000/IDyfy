import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div
      className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6"
      style={{ bottom: 0 }}
    >
      <span className="text-sm text-white sm:text-center dark:text-gray-400">
        © 2022
        <Link to="https://idyfy.tech" className="hover:underline">
          IDyfy™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/T&C" className="mr-4 hover:underline md:mr-6">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link
            // to="mailto:support@idyfy.tech"
            onClick={() => (window.location = "mailto:support@idyfy.tech")}
            className="hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
