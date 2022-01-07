import React from "react";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";

const Home = () => {
  return (
    <div className="row m-auto mt-5">
      <p className="col text-white text-3xl italic">Grow Ideas Like Trees</p>
      <div className=" col-2">
        <SignUp />
      </div>
      <div className="col-2">
        <Login />
      </div>
    </div>
  );
};

export default Home;
