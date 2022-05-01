import React from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import profile from "../../assets/images/dummy_profile.png";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { useEffect } from "react";
import FeedTile from "../Feed_Tile/feed";
const Search = () => {
  // const { key } = useParams();
  const search = useLocation().search;
  const key = new URLSearchParams(search).get("search");
  const [resultTag, setResultTag] = useState();
  const [resultPeople, setResultPeople] = useState();
  const [resultName, setResultName] = useState();
  const [similarIdeas, setResultSimilarIdeas] = useState();
  const [showvalue, setShowValue] = useState(1);

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
    backgroundColor: "#B287FF",

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
    <div className="container">
      <div>
        <div className="bg-white" style={{ height: "20px" }}></div>
      </div>

      <div className="mx-5 offset-lg-2 text-white d-none d-lg-block">
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
          <li className="nav-item">
            <button
              className="nav-link text-white"
              onClick={() => setShowValue(4)}
              style={showvalue === 4 ? active : notActive}
            >
              SIMILAR IDEAS
            </button>
          </li>
        </ul>
      </div>
      <div className="row mt-10">
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
        <center>
          {showvalue === 1 && (
            <div className="offset-lg-1 col-lg-8">
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
                  <div key={index} className="row ">
                    <FeedTile details={idea} className="animate-pulse" />
                  </div>
                ))
              ) : (
                <div>
                  <div class="text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* <FeedTile /> */}
              {/* <button onClick={getideas}>load more</button> */}
            </div>
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
                    <FeedTile details={idea} className="animate-pulse" />
                  </div>
                ))
              ) : (
                <div>
                  <div class=" text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* <FeedTile /> */}
              {/* <button onClick={gettags}>load more</button> */}
            </div>
          )}
          {showvalue === 3 && (
            <div className="offset-lg-1 col-lg-6">
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
                    <div className="idea col-lg-3 col-md-4 col-5 mr-1 ml-1 text-white ">
                      <img
                        className="ml-3 mt-1 icon profile"
                        src={user.profile_pic}
                        alt="My Profile"
                      />
                      <p className="text-left p-1">{user.name}</p>
                      <p className="text-left p-1">{user.about}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div class="text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* <button onClick={getsearch}>load more</button> */}
            </div>
          )}
          {showvalue === 4 && (
            <div className="offset-lg-1 col-lg-6">
              <span
                className="p-2 text-white d-lg-none"
                style={{
                  backgroundColor: "red",
                }}
              >
                SIMILAR IDEAS
              </span>
              {console.log("Here")}
              {similarIdeas ? (
                similarIdeas.map((idea, index) => (
                  <div key={index} className="row ">
                    <FeedTile details={idea} className="animate-pulse" />
                  </div>
                ))
              ) : (
                <div>
                  <div class="spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {/* <FeedTile /> */}
              {/* <button onClick={gettags}>load more</button> */}
            </div>
          )}
        </center>
      </div>
    </div>
  );
};

export default Search;
