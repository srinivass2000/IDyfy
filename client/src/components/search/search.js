import React from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import profile from "../../assets/images/dummy_profile.png";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { useEffect } from "react";
import FeedTile from "../Feed_Tile/feed";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./search.css";
const notify1 = () => toast.success("Idea Starred Successfully!!");
const notify2 = () => toast.success("Idea Unstarred Successfully!");
const notify3 = (text) => toast.error(text);

const Search = () => {
  // const { key } = useParams();
  const urlidea = "/idea/";
  const urluser = "/profile?id=";
  const search = useLocation().search;
  const key = new URLSearchParams(search).get("search");
  const [resultTag, setResultTag] = useState();
  const [resultPeople, setResultPeople] = useState();
  const [resultName, setResultName] = useState();
  const [similarIdeas, setResultSimilarIdeas] = useState();
  const [showvalue, setShowValue] = useState(1);
  const [isActive, setActive] = useState();
  var [starred_count, setStarredCount] = useState();
  const [ideas, setIdeas] = useState();

  // const [skip, setskip] = useState(3);
  // const [skip1, setskip1] = useState(3);
  // const [skip2, setskip2] = useState(3);

  
  const getsearch = async () => {
    try {
      // console.log(skip);
      await axios
        .get(`/api/search/all?query=${key}`, {
          headers: authHeader(),
        })
        .then(
          (res) => {
            setResultTag(res.data.search_by_tags);
            setResultName(res.data.search_by_title);
            setResultPeople(res.data.search_user);
            setResultSimilarIdeas(res.data.similar_ideas);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  const getpeople = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          `/api/search/people?query=${key}`,
          {
            headers: authHeader(),
          }
          // { skip: skip }
        )
        .then(
          (res) => {
            setResultPeople();
            // setskip(skip + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  const gettags = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          `/api/search/tags?query=${key}`,
          {
            headers: authHeader(),
          }
          // { skip: skip1 }
        )
        .then(
          (res) => {
            setResultTag();
            // setskip1(skip1 + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  const toggleStarred = async () => {
    setActive(!isActive);
    if (isActive === false) {
      try {
        // console.log(skip);
        setStarredCount(++starred_count);
        await axios
          .get(`/api/idea/star-idea?idea_id=${resultName._id.toString()}`, {
            headers: authHeader(),
          })
          .then(
            (res) => {
              console.log(res);
              notify1();
            },
            (err) => {
              console.log(err);
              notify3(err.response.data.error);
            }
          );
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        // console.log(skip);
        setStarredCount(--starred_count);
        await axios
          .get(
            `/api/idea/unstar-idea?idea_id=${resultName._id.toString()}`,
            {
              headers: authHeader(),
            }
          )
          .then(
            (res) => {
              console.log(res);
              notify2();
            },
            (err) => {
              console.log(err);
              notify3(err.response.data.error);
            }
          );
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getideas = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          "/api/search/title/" + key,
          {
            headers: authHeader(),
          }
          // { skip: skip2 }
        )
        .then(
          (res) => {
            setResultName();
            // setskip2(skip2 + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getsearch();
  }, []);

  const active = {
    backgroundColor: "#840FCC",

    fontSize: "1.3rem",
    width: "100%",
  };
  const notActive = {
    backgroundColor: "#0A0135",
    fontSize: "1.3rem",
    width: "100%",
  };
  const handleChange = (event) => {
    if (event.target.value === "1") {
      setShowValue(1);
    }
    if (event.target.value === "2") {
      setShowValue(2);
    }
    if (event.target.value === "3") {
      setShowValue(3);
    }
    if (event.target.value === "4") {
      setShowValue(4);
    }
  };

  return (
    <div>
      <div className="">
        <center className="mt-3">
          <div className="col-4 text-white d-none d-lg-block">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <button
                  className="nav-link text-white"
                  onClick={() => setShowValue(1)}
                  style={showvalue === 1 ? active : notActive}
                >
                  TITLE
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white"
                  onClick={() => setShowValue(2)}
                  style={showvalue === 2 ? active : notActive}
                >
                  TAGS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white"
                  onClick={() => setShowValue(3)}
                  style={showvalue === 3 ? active : notActive}
                >
                  PEOPLE
                </button>
              </li>
            </ul>
          </div>
        </center>
        <div>
          <div className="col-12 flex justify-center d-lg-none mb-10">
            <select
              class="form-select form-select-sm mx-2 "
              aria-label=".form-select-sm example"
              style={{ width: "150px", backgroundColor: "#B287FF" }}
              onChange={handleChange}
            >
              <option value="1"> Idea Title</option>
              <option value="2">Idea Tag</option>
              <option value="3"> People</option>
              <option value="4"> Similar Ideas</option>
            </select>
          </div>
          {showvalue === 1 && (
            <>
              <div className="offset-lg-1 col-lg-10">
                <span
                  className="p-2 text-white d-lg-none"
                  style={{
                    backgroundColor: "red",
                  }}
                >
                  IDEA TITLE
                </span>
                {console.log("Here")}
                {resultName ? (
                  resultName.map((idea, index) => (
                    <div key={index} className="relative my-4 ">
                      <Link to={urlidea + idea._id}>
                        <div
                          className="mx-10 idea "
                          style={{ marginTop: "15px" }}
                        >
                          <div
                            className=" "
                            style={{
                              marginLeft: "13px",
                              height: "10rem",
                              borderBottom: "2px solid white",
                            }}
                          >
                            <hr />
                            <div>
                              <h1
                                className="d-flex align-items-start mt-3 mb-1 mx-5"
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "1.4rem",
                                }}
                              >
                                {idea.title}
                              </h1>
                              <h3
                                className="d-flex align-items-start my-3 mx-5"
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {idea.contributors.length +
                                  " users are contributing to this idea"}
                              </h3>
                            </div>
                            <div className="d-flex flex-row-reverse">
                              <div className="offset-lg-1 col-lg-1 d offset-1 col-1">
                                {isActive === false ? (
                                  <img
                                    src="https://img.icons8.com/ios/50/FFFFFF/star--v1.png"
                                    alt="star icon"
                                    className="absolute mt-1 "
                                    width="22px"
                                    onClick={toggleStarred}
                                  />
                                ) : (
                                  <img
                                    src="https://img.icons8.com/ios-filled/50/FFA500/christmas-star.png"
                                    alt="star icon"
                                    className="absolute mt-1 "
                                    width="22px"
                                    onClick={toggleStarred}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className=" row"
                            style={{
                              marginLeft: "13px",
                              height: "3rem",
                            }}
                          >
                            <div className="col d-flex align-items-start">
                              <span
                                className="my-2 mx-5 "
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {idea.liked_users.length + " "} Likes
                              </span>
                              <span
                                className="my-2 mx-5"
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {idea.liked_users.length + " "} Comments
                              </span>
                            </div>
                            <div className="col d-flex flex-row-reverse">
                              <span
                                className="my-2 mx-5"
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {"Created at : " + idea.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div>
                    <div class="text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {showvalue === 2 && (
            <div className="offset-lg-1 col-lg-12">
              <span
                className="p-2 text-white d-lg-none"
                style={{
                  backgroundColor: "red",
                }}
              >
                IDEA TAG
              </span>
              {console.log("Here")}
              {resultTag ? (
                resultTag.map((idea, index) => (
                  <div key={index} className="row ">
                    <Link to={urlidea + idea._id}>
                      <div
                        className="mx-10 col-9"
                        style={{ marginTop: "15px" }}
                      >
                        <div
                          className="relative rounded idea"
                          style={{
                            margin: "18px",
                            height: "12rem",
                          }}
                        >
                          <hr />
                          <div>
                            <h1
                              className="d-flex align-items-start mt-3 mb-1 mx-5"
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "1.4rem",
                              }}
                            >
                              {idea.title}
                            </h1>
                            {/* <hr className="ml-9" style={{background:"white"}}/> */}
                            <h3
                              className="d-flex align-items-start my-3 mx-5"
                              style={{
                                color: "white",
                                fontSize: "1rem",
                              }}
                            >
                              {idea.contributors.length +
                                " users are contributing to this idea"}
                            </h3>
                          </div>
                          <div className=" row absolute bottom-0 left-0">
                            <div className="col d-flex align-items-start">
                              <span
                                className="my-3 mx-5"
                                style={{
                                  borderTop: "2px solid white",
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {idea.liked_users.length + " "} Likes
                              </span>
                              <span
                                className="my-3 mx-5"
                                style={{
                                  borderTop: "2px solid white",
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {idea.liked_users.length + " "} Comments
                              </span>
                            </div>
                            <div className="col d-flex justify-content-end">
                              <span
                                className="my-3 mx-5"
                                style={{
                                  borderTop: "2px solid white",
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {"Created at : " + idea.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  <div class=" text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {showvalue === 3 && (
            <div className="offset-lg-1 col-lg">
              <span
                className="p-2 text-white d-lg-none"
                style={{
                  backgroundColor: "red",
                }}
              >
                PEOPLE
              </span>
              {resultPeople ? (
                resultPeople.map((user, index) => (
                  <div className="row ">
                    <Link to={urluser + user._id}>
                      <div className="col-11 " style={{ marginTop: "15px" }}>
                        <div
                          className="relative rounded "
                          style={{
                            borderTop: "2px solid #B287FF",
                            borderBottom: "2px solid #B287FF",
                            margin: "18px",
                            // height: "12rem",
                          }}
                        >
                          <div className="row">
                            <div className="col-3">
                              <div className="rounded-circle ">
                                <center>
                                  <img
                                    className="icon profile my-2 ml-9"
                                    src={user.profile_pic}
                                    alt="Profile Pic"
                                    style={{ height: "160px", width: "160px" }}
                                  />{" "}
                                </center>
                              </div>
                            </div>
                            <div className="col-9">
                              <hr />
                              <h1
                                className="d-flex align-items-start mt-3 mb-1 mx-5"
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "1.4rem",
                                }}
                              >
                                {user.name}
                              </h1>
                              <h3
                                className="d-flex align-items-start my-3 mx-5"
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {user.job}
                              </h3>
                              <h3
                                className="d-flex align-items-start my-3 mx-5"
                                style={{
                                  color: "white",
                                  fontSize: "1rem",
                                }}
                              >
                                {"Contributed to " +
                                  user.ideas_contributed.length}
                              </h3>
                            </div>
                            <div className=" absolute bottom-0 left-0">
                              <div className="row">
                                <div className="col-3"></div>
                                <div className="col-9">
                                  <hr
                                    className="mx-10 mt-2"
                                    style={{ background: "#B287FF" }}
                                  />
                                  <div className=" d-flex align-items-start">
                                    <span
                                      className="my-3 mx-5"
                                      style={{
                                        color: "white",
                                        fontSize: "1rem",
                                      }}
                                    >
                                      Followers : {user.followers.length}
                                    </span>
                                    <span
                                      className="my-3 mx-5"
                                      style={{
                                        color: "white",
                                        fontSize: "1rem",
                                      }}
                                    >
                                      Score {Math.round(user.engagement_score)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>
                  <div class="text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
