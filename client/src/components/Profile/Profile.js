import React from "react";
import "./profile.css";
import profile from "../../assets/svg/Dummy_Profile2.svg";

const Profile = () => {
  return (
    <div className="profilebanner ">
      <div className="container shadow-lg p-3  rounded color ">
        <div className="row pb-2  border-bottom">
          <div className=" col-2">
            <div className="flex justify-center">10</div>
            <h6 className="flex justify-center">Contributions</h6>
          </div>
          <div className=" col-2">
            <div className="flex justify-center">89</div>
            <h6 className="flex justify-center">Followers</h6>
          </div>
          <div className="col-4 flex justify-center">
            <img src={profile} alt="My Profile" className="profileimage" />
          </div>
          <div className=" col-2">
            <div className="flex justify-center">10</div>
            <h6 className="flex justify-center">Expert Rating</h6>
          </div>
          <div className=" col-2">
            <div className="flex justify-center">9</div>
            <h6 className="flex justify-center">Engagement score</h6>
          </div>
        </div>
        <div className="row mt-40 flex justify-center">
          <div className="name">Thats What She Said</div>
          <div className="address">There she lives</div>
          <div className="post">Thats her job</div>
          <div className="university">- Thats her university</div>
        </div>
        <div className="row  flex justify-center">
          <span className="name mt-10">About Me</span>
          <div className="about">
            I need an easy friend I do, with an ear to lend I do think you fit
            this shoe I do, but you have a clue I'll take advantage while You
            hang me out to dry But I can't see you every night Free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
