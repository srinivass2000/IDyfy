import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
// import profile from "../../assets/svg/Dummy_Profile2.svg";
import authHeader from "../../services/auth-header";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";

const Profile = () => {
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);
  const [ideas, setIdeas] = useState([]);
  const [edit, setEdit] = useState();

  const search = useLocation().search;

  const id = new URLSearchParams(search).get("id");

  // const { id } = useParams();
  const url = "/profileEdit";

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    if (id) {
      axios
        .get(`/api/profile?id=${id}`, {
          headers: authHeader(),
        })
        .then((res) => {
          setUser(res.data.user);
          setIdeas(res.data.ideas);
          setEdit(res.data.can_edit);
          console.log(res.data);
          setLoad(false);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`/api/profile`, {
          headers: authHeader(),
        })
        .then((res) => {
          setUser(res.data.user);
          setIdeas(res.data.ideas);
          setEdit(res.data.can_edit);
          console.log(res.data);
          setLoad(false);
        })
        .catch((err) => console.log(err));
    }
  };

  if (load) {
    return (
      <div>
        {console.log("loading....")}
        <Loader />
      </div>
    );
  }

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
              <div className="flex justify-center">
                {user.engagement_score || "0"}
              </div>
              <h6 className="flex justify-center"> Engagement score </h6>
            </div>

            <div className="col-lg-4 col-md-3 flex justify-center">
              <img
                src={user.profile_pic}
                alt="My Profile"
                className="profileimage"
              />
            </div>

            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center">
                {user.followers.length || "0"}
              </div>
              <h6 className="flex justify-center"> Followers </h6>
            </div>
            <div className=" col-lg-2 col-md-2">
              <div className="flex justify-center">
                {user.following.length || "0"}
              </div>
              <h6 className="flex justify-center"> Following </h6>
            </div>
          </div>
          <div className="row mt-10 flex justify-center">
            <div className="name" style={{ fontSize: "x-large" }}>
              {user.name}
            </div>
            <div className="post" style={{ fontSize: "x-large" }}>
              {user.job || "N.A(job)"}
            </div>
            <div className="university" style={{ fontSize: "x-large" }}>
              {user.university || "N.A(university)"}
            </div>
          </div>
          <div className="row  flex justify-center">
            <span className="name mt-10" style={{ fontSize: "x-large" }}>
              About Me
            </span>
            <div className="about">{user.about}</div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row mt-4">
          <div
            className="fs-3 col-lg-12 col-12 blue border-radius rounded"
            style={{ color: "white" }}
          >
            <em style={{ textAlign: "center" }}>Contributed Ideas</em>
            {edit ? (
              <div>
                <Link
                  to={{
                    pathname: url,
                    state: { user },
                  }}
                >
                  <button
                    className="btn pl-3 pr-3 mb-3 mt-3"
                    style={{
                      backgroundColor: "#F62F08",
                      color: "white",
                      fontSize: "1.7rem",
                      borderRadius: "1.2rem",
                      fontWeight: "500",
                    }}
                  >
                    Edit Profile
                  </button>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="row ">
          {ideas
            .filter((id, idx) => idx < 6)
            .map((idea, i) => (
              <div
                key={i}
                className="idea offset-lg-1 col-lg-2 offset-2 col-8 mr-28 text-white mt-10"
              >
                {idea.tags
                  .filter((t, idx) => idx < 2)
                  .map((tag, i) => (
                    <span key={i} className="text-left p-2">
                      #{tag.replace(/ /g, "")}
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
      <Footer />
    </div>
  );
};

export default Profile;
