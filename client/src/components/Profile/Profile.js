import React from "react";
import "./profile.css";
import profile from "../../assets/svg/Dummy_Profile2.svg";

const Profile = () => {
  return (
    <div>
      <div className="profilebanner d-none d-lg-block"></div>
      <div className="container relative box">
        <div className="offset-lg-1 col-lg-10 shadow-lg p-3 rounded color ">
          <div
            className="row  d-md-block d-sm-none"
            style={{ height: "140px" }}
          ></div>
          <div className="row pb-2 border-bottom">
            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center"> 10 </div>{" "}
              <h6 className="flex justify-center"> Contributions </h6>{" "}
            </div>{" "}
            <div className=" col-lg-2 col-md-3">
              <div className="flex justify-center"> 89 </div>
              <h6 className="flex justify-center"> Followers </h6>
            </div>{" "}
            <div className="col-lg-4 col-md-3 flex justify-center">
              <img src={profile} alt="My Profile" className="profileimage" />
            </div>{" "}
            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center"> 10 </div>{" "}
              <h6 className="flex justify-center"> Expert Rating </h6>{" "}
            </div>{" "}
            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center"> 9 </div>{" "}
              <h6 className="flex justify-center"> Engagement score </h6>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row mt-10 flex justify-center">
            <div className="name" style={{fontSize:"x-large"}}> Thats What She Said </div>{" "}
            <div className="address" style={{fontSize:"x-large"}}> There she lives </div>{" "}
            <div className="post" style={{fontSize:"x-large"}}> Thats her job </div>{" "}
            <div className="university" style={{fontSize:"x-large"}}> -Thats her university </div>{" "}
          </div>{" "}
          <div className="row  flex justify-center">
            <span className="name mt-10" style={{fontSize:"x-large"}}> About Me </span>{" "}
            <div className="about">
              I need an easy friend I do, with an ear to lend I do think you fit
              this shoe I do, but you have a clue I 'll take advantage while You
              hang me out to dry But I can 't see you every night Free{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="container ">
        <div className="row mt-4">
          <div className="fs-3 offset-lg-1 col-lg-2 offset-1 col-5 blue border-radius rounded">
            <em>Contributed Ideas</em>
          </div>
        </div>
        <div className="row ">
          <div className="idea offset-lg-1 col-lg-2 offset-2 col-8 mr-28 text-white mt-10">
            <p className="text-left p-2">#Machine learnig</p>
            <p className="text-left p-1">IDEA TITLE</p>
            <p className="text-left p-1">
              Desc: fewref jej iegwerj ijui weiug ehg wehgij ijew irui erh iu
              eie riof eiuf ehf iouw erhu.....
            </p>
          </div>
        </div>
        <div className="row mt-4"></div>
      </div>
    </div>
  );
};

export default Profile;
