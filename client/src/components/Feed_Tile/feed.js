import React from "react";
import FeedIcon from "../../assets/svg/feedicon.svg";
import Star from "../../assets/icon/star.svg";
import Chat from "../../assets/icon/chat.svg";
import Share from "../../assets/icon/share.svg";
import Like from "../../assets/icon/heart.svg";

import "../Feed_Tile/feed.css";
const FeedTile = () => {
  return (
    <div className="text-white p-4 mb-12 tile">
      <div className="row">
        <div className="offset-1 mt-5 col-8">
          <div className="row">Title : Ideas of Ideas</div>
          <div className="row">Field : ML and Web</div>
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
          Our platform will bring like minded people to work for a common goal
          without much friction and make the whole brainstorming part of the
          ideation phase effortless.
        </p>
      </div>
      <button className="my-3 readmore rounded-pill px-2">Read more</button>
      <hr className="hr mt-1" />
      <div className="row mt-3">
        <div className="offset-1 col-2 ">
          <img src={Like} alt="feed icon" className="absolute mt-1" /> 3
        </div>
        <div className="col-2">
          <img
            src={Chat}
            alt="feed icon"
            className="absolute mr-4 mt-1"
            width="22px"
          />{" "}
          20
        </div>
        <div className="col-2">
          <img
            src={Star}
            alt="feed icon"
            className="absolute mt-1 "
            width="32px"
          />{" "}
          5
        </div>
        <div className="offset-4 col-1">
          <img src={Share} alt="feed icon" className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default FeedTile;
