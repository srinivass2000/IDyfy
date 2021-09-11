import React from "react";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";

const Home = () => {
  return (
    <div className="row m-auto mt-5">
      <div className="offset-4 col-2">
        <SignUp />
      </div>
      <div className="col-2">
        <Login />
      </div>
    </div>
  );
};

export default Home;
