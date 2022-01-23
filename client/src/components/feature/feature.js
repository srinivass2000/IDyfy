import React, { useState, useEffect } from "react";
import Like from "../../assets/icon/heart.svg";
import Chat from "../../assets/icon/chat.svg";
import Footer from "../../components/Footer/footer";
import Comment from "../../components/comment/comment";
//import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { Link } from "react-router-dom";

const Feature = () => {
  const [load, setLoad] = useState(true);
  const [feature, setFeature] = useState({});
  const [canEdit, setCanEdit] = useState(false);
  const [comments, setComment] = useState([]);

  //const { idea_id, feature_id } = useParams();
  const idea_id = "61ed9740d094048f0a14e56c";
  const feature_id = "61ed9827d094048f0a14e589";
  const url = "/feaEdit";

  const fetchFeature = () => {
    axios
      .get(
        `http://localhost:5000/api/feature/get-feature?idea_id=${idea_id}&feature_id=${feature_id}`,
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        setFeature(res.data.feature);
        setComment(res.data.comments);
        setCanEdit(res.data.can_edit);
        console.log(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFeature();
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
      <div className="container">
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <button
              className="btn pl-3 pr-3 mb-3 mt-3"
              style={{ backgroundColor: "#840FCC", color: "white" }}
            >
              {feature.title}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-4 col-md-4 flex justify-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " style={{ color: "white" }}>
                  <a href="/">feature-1</a>
                </li>
                <li className="breadcrumb-item" style={{ color: "white" }}>
                  <a href="/">feature-12</a>
                </li>
                <li
                  className="breadcrumb-item active "
                  style={{ color: "white" }}
                  aria-current="page"
                >
                  feature-123
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
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
              style={{ backgroundColor: "#F2F4F7", borderRadius: "20px" }}
            >
              {feature.content}
            </p>
          </div>
          <div className="mt-3 offset-md-6 offset-7 col-md-1 col-1 flex justify-end">
            <img src={Like} alt="like" className="absolute mt-1" />
          </div>
          <div
            className="mt-3 text-start col-md-1 col-1 "
            style={{ color: "white" }}
          >
            3
          </div>

          <div className="ml-6 mt-3 col-md-1 col-1 flex justify-end">
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
            3
          </div>
          {canEdit ? (
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Link
                  to={{
                    pathname: url,
                    state: { feature },
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
                    Edit Feature
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="row">
          <div className="mt-3 col-md-6">
            <Comment />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;
