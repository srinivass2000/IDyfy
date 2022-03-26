import React from "react";
import { useState } from "react";
import Idyfy_logo from "../../assets/svg/Idyfy_logo.svg";
import "../Auth/auth.css";
import Footer from "../Footer/footer";
import Tags from "./tagsfunc";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
const CreateIdea = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const notify1 = () => toast.success("Idea Created Sucessfully");
  const history = useHistory();

  const childToParent = (childdata) => {
    setTags([...childdata]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "POST",
        url: "/api/idea/create-idea",
        headers: authHeader(),
        data: {
          title: title,
          description: description,
          tags: tags,
        },
      });

      if (res.status === 200) {
        notify1();
        setTitle("");
        setDescription("");
        setTags([]);
        //tags not going from the field but anyways we are redirecting to idea page so no issues
        console.log("idea created sucessfully");
        history.push("/idea/" + res.data.idea._id.toString());
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
        ! Clever Minds Come With Great Ideas !
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
                Create a New Idea !!
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

            <div className="flex justify-center mt-3 mx-3">
              <Editor
                textareaName="Body"
                // initialValue="<p>Description</p>"
                apiKey="krw1cp6qqs9hj1oedlcjumsizty01tq1ksvpxkn9d94pr3qj"
                init={{
                  height: 300,
                  width: 1000,
                  menubar: false,
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

            <div className="flex justify-start mt-3 mx-3">
              <Tags childToParent={childToParent} />
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
                I agree to the{" "}
                <a href="/" className="link">
                  T&C
                </a>
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="mr-2 h-10 mb-10 btn button">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateIdea;
