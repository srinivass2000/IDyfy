import React from "react";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";

const Home = () => {
  return (
    <div className="row ">
      <div className="col-6 mt-10">
        <SignUp />
      </div>
      <div className="col-6 mt-10">
        <Login />
      </div>
    </div>
  );
};

export default Home;
