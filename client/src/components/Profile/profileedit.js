import React from "react";
import { useState, useEffect } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const loc = useLocation();
  console.log(loc.state.user);

  const [name, setName] = useState(loc.state.user.name);
  //   const [email, setEmail] = useState(loc.state.user.email);
  const [about, setAbout] = useState(loc.state.user.about);
  const [job, setJob] = useState(loc.state.user.job);
  const [university, setUniversity] = useState(loc.state.user.university);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //const [tags,setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/profile/update-idea",
        headers: authHeader(),
        data: {
          name,
          about,
          university,
          job,
        },
      });

      if (res.status === 200) {
        setName("");
        setAbout("");
        setJob("");
        setUniversity("");
        console.log("Profile updated sucessfully");
      } else {
        console.log("some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-3 mt-3" style={{ color: "white", fontSize: "1.6rem" }}>
        ! Edit Your Profile So You Can Satnd Out In The Crowd !
      </h1>
      <div
        className=" m-auto container formsize"
        style={{
          backgroundColor: "#b6aaf3",
          width: "60%",
          borderRadius: "20px",
        }}
      >
        <div className="row">
          <img
            src={Idyfy_logo}
            style={{ height: "150px" }}
            alt="IDYFY"
            className="mt-2"
          />
          <form
            // onSubmit={handleSubmit}
            onKeyPress={(event) => {
              if (event.which === 13 /* Enter */) {
                event.preventDefault();
              }
            }}
          >
            <div className="flex justify-center">
              <h1
                className="mt-3"
                style={{ fontSize: "1.6rem", fontWeight: "bold" }}
              >
                Edit Profile !!
              </h1>
            </div>
            {console.log(name)}
            <div className="flex justify-center mt-3 mx-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control form_box"
                placeholder="Title"
              />
            </div>
            <div className="flex justify-center mt-3 mx-3">
              <textarea
                rows="5"
                cols="60"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="form-control form_box"
                placeholder="Describe yourself in few lines..."
              ></textarea>
            </div>
            <div className="flex justify-center mt-3 mx-3">
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="form-control form_box"
                placeholder="Job"
              />
            </div>
            <div className="flex justify-center mt-3 mx-3">
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="form-control form_box"
                placeholder="University"
              />
            </div>

            <div className="flex justify-start mt-3 mx-3"></div>

            <div className="flex justify-center">
              <button type="submit" className="mr-2 h-10 mb-10 btn button">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
