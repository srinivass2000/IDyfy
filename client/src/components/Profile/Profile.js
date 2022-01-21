import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import profile from "../../assets/svg/Dummy_Profile2.svg";
import authHeader from "../../services/auth-header";

const Profile = () => {
  const [user, setUser] = useState({});
  const [ideas, setIdeas] = useState([]);
  //mama giving later itseems
  //const {id} = useParams();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios
      .get(`http://localhost:5000/api/profile`, { headers: authHeader() })
      .then((res) => {
        setUser(res.data.user);
        setIdeas(res.data.ideas);
        //console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
              <div className="flex justify-center">
                {user.ideas_contributed.length}
              </div>
              <h6 className="flex justify-center"> Contributions </h6>
            </div>
            <div className=" col-lg-2 col-md-3">
              <div className="flex justify-center"> N.A </div>
              <h6 className="flex justify-center"> Followers </h6>
            </div>
            <div className="col-lg-4 col-md-3 flex justify-center">
              <img src={profile} alt="My Profile" className="profileimage" />
            </div>
            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center">N.A</div>
              <h6 className="flex justify-center"> Engagement score </h6>
            </div>
          </div>
          <div className="row mt-10 flex justify-center">
            <div className="name" style={{ fontSize: "x-large" }}>
              {user.name}
            </div>
            <div className="post" style={{ fontSize: "x-large" }}>
              N.A(job)
            </div>
            <div className="university" style={{ fontSize: "x-large" }}>
              N.A(university)
            </div>
          </div>{" "}
          <div className="row  flex justify-center">
            <span className="name mt-10" style={{ fontSize: "x-large" }}>
              {" "}
              About Me{" "}
            </span>
            <div className="about">N.A</div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row mt-4">
          <div className="fs-3 offset-lg-1 col-lg-2 offset-1 col-5 blue border-radius rounded">
            <em style={{ color: "white" }}>Contributed Ideas</em>
          </div>
        </div>
        {/* {console.log(ideas[0].title)}
            {
              ideas.map((idea,i)=>
              <p key={i} className="text-left p-2">#{idea.title}</p>
              )
            } */}
        <div className="row ">
          {ideas.map((idea, i) => (
            <div className="idea offset-lg-1 col-lg-2 offset-2 col-8 mr-28 text-white mt-10">
              {idea.tags
                .filter((t, idx) => idx < 2)
                .map((tag, i) => (
                  <span key={i} className="text-left p-2">
                    #{tag}
                  </span>
                ))}
              <p className="text-left p-1">{idea.title}</p>
              <p className="text-left p-1">
                {idea.description.length > 50 &&
                  idea.description.substring(50, 0) + " . . ."}
                {idea.description.length <= 50 &&
                  idea.description.substring(50, 0)}
              </p>
            </div>
          ))}
        </div>
        <div className="row mt-4"></div>
      </div>
    </div>
  );
};

export default Profile;
