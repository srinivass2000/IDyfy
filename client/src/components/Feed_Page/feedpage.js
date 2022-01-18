import React, { useEffect } from "react";
import FeedTile from "../Feed_Tile/feed";
import { useState } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";
const FeedPage = () => {
  const [ideas, setIdeas] = useState();
  const [skip, setskip] = useState(0);
  const getideas = async (skip) => {
    try {
      // console.log(skip);
      await axios
        .get("http://localhost:5000/api/idea/get-ideas/" + skip, {
          headers: authHeader(),
        })
        .then(
          (res) => {
            if (skip === 0) {
              setIdeas(res.data.ideas);
            }
            setIdeas([...ideas, ...res.data.ideas]);
            // console.log(res.data.ideas);
            console.log(ideas);
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
    getideas(skip);
  }, [skip]);
  const skipinc = () => {
    setskip(skip + 10);
  };
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-5 col-4">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
        <div className="col-lg-2 col-4">
          <button
            className="btn-sm mb-1"
            style={{ backgroundColor: "#840FCC", color: "white" }}
          >
            MY FEED
          </button>
        </div>
        <div className="col-lg-5 col-4">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
      </div>

      {/* map */}
      {ideas ? (
        ideas.map((idea, index) => (
          <div key={index} className="row ">
            <div className="offset-md-1 col-md-10 offset-lg-3 col-lg-6 col-12 text-white">
              <FeedTile details={idea} />
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      <div>
        <button onClick={skipinc}>load more</button>
      </div>
    </div>
  );
};

export default FeedPage;
