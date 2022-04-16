import React from "react";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import Banner from "./landing-page/banner";
import About from "./landing-page/about";
import Features from "./landing-page/features";
import Footer from "./landing-page/footer";
import Team from "./landing-page/team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Features />
      <Team />
      <Footer />
      {/* <div className="row mt-5">
        <h1 className="offset-2 col-8 text-white text-6xl bold mb-8">
          Welcome to IDyfy!
        </h1>
        <p className="offset-2 col-8 text-white text-2xl italic mb-4">
          Grow Ideas Like Trees
        </p>
        <div className="row">
          <SignUp />
        </div>
        <span style={{ height: "40px" }}></span>
        <div className="row">
          <Login />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
