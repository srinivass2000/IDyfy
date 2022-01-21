import React, { useState, useEffect } from "react";
import back from "../../assets/svg/backidea.svg";
import contri from "../../assets/svg/contributor_icon.svg";
import Like from "../../assets/icon/heart.svg";
import Chat from "../../assets/icon/chat.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
//import authHeader from "../../services/auth-header";

const Idea = () => {
  const [idea, setIdea] = useState({});
  const [comments, setComment] = useState([]);
  const { id } = useParams();

  const [load, setLoad] = useState(true);
  const [idea, setIdea] = useState({});
  const [comments, setComment] = useState([]);
  const { id } = useParams();

  const fetchIdea = () => {
    axios
      .get(`http://localhost:5000/api/idea/get-idea?id=${id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        setIdea(res.data.idea);
        setComment(res.data.comments);
        console.log(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchIdea();
  }, []);

  if (load) {
    return (
      <div>
        {console.log("loading....")}
        <h1 style={{ color: "white" }}>loading....</h1>
      </div>
    );
  }

  return (
    <div>
      {console.log(idea)}
      <div className="relative flex justify-center">
        <div
          className="absolute top-1/3 sm:text-xl md:text-4xl lg:text-6xl"
          style={{ color: "white" }}
        >
          {idea.title}
        </div>
        <img src={back} alt="backdrop" style={{ width: "100%" }} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2 offset-md-10 d-none d-sm-block mt-6 mb-3">
            <button className="btn-sm">
              <img src={contri} alt="contributors" />
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn-sm pl-3 pr-3 mb-3 mt-3"
              style={{ backgroundColor: "#840FCC", color: "white" }}
            >
              Description :
            </button>
          </div>
          <div className="col-md-8 pr-3 pl-3">
            <p
              className="p-4"
              style={{ backgroundColor: "#ffffff", borderRadius: "20px" }}
            >
              {idea.description}
            </p>
          </div>
          <div className="mt-3 offset-md-6 offset-7 col-md-1 flex justify-end col-1">
            <img src={Like} alt="like" className="absolute mt-1 " />
          </div>
          <div
            className="mt-3 text-start col-md-1 col-1 "
            style={{ color: "white" }}
          >
            3
          </div>

          <div className="ml-6 mt-3  col-md-1 d  col-1 flex justify-end">
            <img
              src={Chat}
              alt="chat"
              className="absolute  mt-1"
              width="22px"
            />
          </div>
          <div
            className="mt-3 text-start col-md-1 col-1"
            style={{ color: "white" }}
          >
            {comments.length}
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3">
            <button
              className="btn-sm pl-3 pr-3 mb-3 mt-3"
              style={{ backgroundColor: "#840FCC", color: "white" }}
            >
              Links :
            </button>
          </div>
          <div className="col-md-2 p-3 mt-3 ">
            <a className="m-3" style={{ color: "white" }} href="/">
              Figma
            </a>
            <a className="m-3" style={{ color: "white" }} href="/">
              Github
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3">
            <button
              className="btn-sm pl-3 pr-3 mb-3 mt-3"
              style={{ backgroundColor: "#840FCC", color: "white" }}
            >
              #Tags# :
            </button>
          </div>
          <div className="col-md-2 p-3 mt-3 ">
            {idea.tags.map((tag, i) => (
              <a key={i} className="m-3" style={{ color: "white" }} href="/">
                #{tag.replace(/ /g, "")}
              </a>
            ))}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <button
              className="btn-sm pl-3 pr-3 mb-3 mt-3"
              style={{ backgroundColor: "#840FCC", color: "white" }}
            >
              Upload Files
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
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
              View Graph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
