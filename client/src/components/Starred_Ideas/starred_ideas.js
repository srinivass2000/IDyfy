import React from "react";
import FeedTile from "../Feed_Tile/feed";
const Starred_ideas = () => {
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
      <div className="row ">
        <div className="offset-md-1 col-md-10 offset-lg-3 col-lg-6 col-12">
          <FeedTile />
          <FeedTile />
          <FeedTile />
        </div>
      </div>
    </div>
  );
};

export default Starred_ideas;
