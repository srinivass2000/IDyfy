import React, { useEffect } from "react";
import FeedTile from "../Feed_Tile/feed";
import { useState } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";
import Loader from "../Loader/loader";
const Starred_ideas = () => {
  const [ideas, setIdeas] = useState();
  const getideas = async () => {
    try {
      await axios
        .get("/api/idea/starred-ideas", {
          headers: authHeader(),
        })
        .then(
          (res) => {
            setIdeas(res.data.ideas);
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
    getideas();
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-5 col-3">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
        <div className="col-lg-2 col-6">
          <button
            className="btn-sm mb-1"
            style={{ backgroundColor: "#840FCC", color: "white" }}
          >
            STARRED IDEAS
          </button>
        </div>
        <div className="col-lg-5 col-3">
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
        <>
          <div>
            <Loader />
          </div>
        </>
      )}
    </div>
  );
};

export default Starred_ideas;
