import React from "react";
import { useState, useEffect } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const EditFeature = () => {
  const loc = useLocation();
  console.log(loc.state.feature);

  const notify1 = () => toast.success("Feature Edited Sucessfully");

  const [title, setTitle] = useState(loc.state.feature.title);
  const [description, setDescription] = useState(loc.state.feature.content);
  const id = loc.state.feature._id.toString();
  const parent_id = loc.state.feature.parent_id.toString();
  const idea_id = loc.state.feature.idea_id.toString();
  const version_start = loc.state.feature.version_start;

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "PUT",
        url: "/api/feature/update-feature",
        headers: authHeader(),
        data: {
          id: id,
          title: title,
          content: description,
          idea_id: idea_id,
          parent_id: parent_id,
          version_start: version_start,
        },
      });

      if (res.status === 200) {
        notify1();
        setTitle("");
        setDescription("");
        console.log("feature updated sucessfully");
        //change path according to feaure id later
        history.push("/feature");
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
        ! Edit Your Feature To Make It More Brilliant !
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
            onSubmit={handleSubmit}
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
                Edit Feature !!
              </h1>
            </div>
            {/* {console.log(title)} */}
            <div className="flex justify-center mt-3 mx-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control form_box"
                placeholder="Title"
              />
            </div>
            <div className="flex justify-center mt-3 mx-3">
              <textarea
                rows="5"
                cols="60"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control form_box"
                placeholder="Description"
              ></textarea>
            </div>

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

export default EditFeature;
