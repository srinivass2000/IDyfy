import React from "react";
import FeedIcon from "../../assets/svg/feedicon.svg";
import "../Feed_Tile/feed.css";
const FeedTile = () => {
  return (
    <div className="text-white p-4 tile">
      <div className="row">
        <div className="offset-1 mt-5 col-8">
          <div className="row">Title</div>
          <div className="row">Field</div>
        </div>

        <div className="col-3 mt-3 relative">
          <img
            src={FeedIcon}
            alt="feed icon"
            height="120px"
            width="120px"
            className="absolute"
          />
          <div className="absolute mt-4 ml-7 text-black">
            <p className="bold text-xl">5</p>
            <p>contributers</p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <h2>Description</h2>
        <p className="mt-1">
          lorem ipsum desve ge gergerk eirj ijf jrjfi w ff if f wjfwf wi we
          wfwjfwnfnwf jowjf wf{" "}
        </p>
      </div>
      <button className="my-3 readmore rounded-pill px-2">Read more</button>
      <hr className="hr mt-1" />
      <div className="row mt-3">
        <div className="offset-1 col-1">Like</div>
        <div className="col-1">Chat</div>
        <div className="col-1">Star</div>
        <div className="offset-6 col-1">Share</div>
      </div>
    </div>
  );
};

export default FeedTile;
