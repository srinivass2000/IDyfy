import React, { useState, useEffect } from "react";
import Like from "../../assets/icon/heart.svg";
import Chat from "../../assets/icon/chat.svg";
import Footer from "../../components/Footer/footer";
import Comment from "../../components/comment/comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { Link } from "react-router-dom";

const Feature = () => {
  const [load, setLoad] = useState(true);
  const [load2, setLoad2] = useState(false);
  const [feature, setFeature] = useState({});
  const [canEdit, setCanEdit] = useState(false);
  const [comments, setComment] = useState([]);

  const { idea_id, feature_id } = useParams();
  // const idea_id = "61eee0198824f70eb12c7107";
  // const feature_id = "61eeed4daf56b67335d393ab";
  const url = "/feaEdit";

  const [content, setContent] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      let res = await axios({
        method: "POST",
        url: "/api/comment/post-comment",
        headers: authHeader(),
        data: {
          idea_id: idea_id,
          feature_id: feature_id,
          content: content,
        },
      });

      if (res.status === 200) {
        console.log("comment sucessfully");
        reloadpage();
      } else {
        console.log("some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const reloadpage = () => {
    setLoad2(!load2);
  };

  const fetchFeature = () => {
    axios
      .get(
        `/api/feature/get-feature?idea_id=${idea_id}&feature_id=${feature_id}`,
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
    console.log("cholna");
  }, [load2]);

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
              style={{
                backgroundColor: "#F2F4F7",
                borderRadius: "20px",
                textAlign: "left",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: feature.content }} />
              {/* {feature.content} */}
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
          <div className="col-6">
            <Comment comments={comments} />
          </div>

          <div className="col-6">
            <div className="row">
              <div className="flex justify-center mt-3 mx-3">
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control form_box"
                  placeholder="Enter Comment"
                />
              </div>
            </div>
            <div className="row">
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleComment}
                  className="mr-2 h-10 mb-10 btn button"
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;
