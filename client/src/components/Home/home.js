import React from "react";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <p className="offset-2 col-8 text-white text-3xl italic">
          Grow Ideas Like Trees
        </p>
        <div className="row">
          <SignUp />
        </div>
        <span style={{ height: "40px" }}></span>
        <div className="row">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
