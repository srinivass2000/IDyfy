import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { Editor } from "@tinymce/tinymce-react";

const CreateFeature = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { idea_id, parent_id } = useParams();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "POST",
        url: "/api/feature/create-feature",
        headers: authHeader(),
        data: {
          title: title,
          content: description,
          idea_id,
          parent_id,
          level: 1,
          version_start: 1,
        },
      });

      if (res.status === 200) {
        setTitle("");
        setDescription("");
        console.log("feature created sucessfully");
        history.push("../../graph/" + idea_id);
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
        ! Clever Minds Come With Great Features For An Idea !
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
                Create a New Feature !!
              </h1>
            </div>
            <div className="flex justify-center mt-3 mx-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control form_box"
                placeholder="Title"
              />
            </div>
            {/* <div className="flex justify-center mt-3 mx-3">
              <textarea
                rows="5"
                cols="60"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control form_box"
                placeholder="Description"
              ></textarea>
            </div> */}

            <div className="flex justify-center mt-3 mx-3">
              <Editor
                textareaName="Body"
                // initialValue="<p>Description</p>"
                apiKey="krw1cp6qqs9hj1oedlcjumsizty01tq1ksvpxkn9d94pr3qj"
                init={{
                  height: 300,
                  width: 1000,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  placeholder: "Description",
                }}
                onEditorChange={(newText) => setDescription(newText)}
              />
            </div>

            <div className="ml-3 mt-2 mb-3 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="tandc"
                required
              />
              <label
                className="pl-3 custom-control-label text-white"
                htmlFor="tandc"
              >
                I agree to{" "}
                <Link to="/T&C" className="link">
                  T&C
                </Link>
                {""} and {""}
                <Link to="/privacy-policy" className="link">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="mr-2 h-10 mb-10 btn button">
                Create Feature
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateFeature;
