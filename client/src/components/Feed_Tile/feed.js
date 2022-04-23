import React from "react";
import { Link } from "react-router-dom";
import "../Feed_Tile/feed.css";
import { useState } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { toast } from "react-toastify";
import { RWebShare } from "react-web-share";

const notify1 = () => toast.success("Idea Starred Successfully!!");
const notify2 = () => toast.success("Idea Unstarred Successfully!");
const notify5 = () => toast.success("Idea Liked!");
const notify6 = () => toast.success("Idea Unliked!");
const notify3 = (text) => toast.error(text);

const FeedTile = (props) => {
  const url = "/idea/";
  function removeHTML(str) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
  }

  const [isActive, setActive] = useState(props.details.starred);
  var [starred_count, setStarredCount] = useState(
    props.details.starred_by.length
  );

  const [isLiked, setActiveliked] = useState(props.details.liked);
  var [likes_count, setLikesCount] = useState(props.details.liked_users.length);

  const toggleStarred = async () => {
    setActive(!isActive);
    if (isActive === false) {
      try {
        // console.log(skip);
        setStarredCount(++starred_count);
        await axios
          .get(`/api/idea/star-idea?idea_id=${props.details._id.toString()}`, {
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
            `/api/idea/unstar-idea?idea_id=${props.details._id.toString()}`,
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

  const toggleLiked = async () => {
    setActiveliked(!isLiked);
    if (isLiked === false) {
      try {
        // console.log(skip);
        setLikesCount(++likes_count);
        await axios
          .get(`/api/idea/like-idea?idea_id=${props.details._id.toString()}`, {
            headers: authHeader(),
          })
          .then(
            (res) => {
              console.log(res);
              notify5();
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
        setLikesCount(--likes_count);
        await axios
          .get(
            `/api/idea/unlike-idea?idea_id=${props.details._id.toString()}`,
            {
              headers: authHeader(),
            }
          )
          .then(
            (res) => {
              console.log(res);
              notify6();
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

  return (
    <div className="text-white p-4 mb-12 tile">
      <div className="row overflow-x-hidden">
        <div className="offset-lg-1 mt-4 col-lg-8 col-8">
          <div
            className="flex justify-center fs-1 mb-3"
            style={{ fontFamily: "Pelo" }}
          >
            {props.details.title}
          </div>
          <div className="flex align-left ">
            <span
              style={{ textDecoration: "underline", fontFamily: "cursive" }}
            >
              Field:
            </span>
            {props.details.tags.map((tag, index) => (
              <p key={index} className="d-inline px-2">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="col-4 d-block d-sm-none mt-3">
          <em
            style={{
              font: "30px Arial, sans-serif",
            }}
          >
            {props.details.contributors.length}
          </em>
          Contributors
        </div>
        <div className="col-3 mt-3 d-none d-sm-block">
          <svg
            width="107"
            height="106"
            viewBox="0 0 111 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="95.941"
              cy="16.1249"
              rx="10.6076"
              ry="10.75"
              fill="#E43A19"
            />
            <ellipse
              cx="41.4583"
              cy="60.1999"
              rx="25.4583"
              ry="25.8"
              fill="#111F4D"
            />
            <g filter="url(#filter0_bd_840_2198)">
              <ellipse
                cx="63.6667"
                cy="42.9999"
                rx="43.3333"
                ry="43"
                fill="url(#paint0_linear_840_2198)"
              />
              <path
                d="M106.5 42.9999C106.5 66.4683 87.3265 85.4999 63.6667 85.4999C40.0068 85.4999 20.8333 66.4683 20.8333 42.9999C20.8333 19.5314 40.0068 0.499878 63.6667 0.499878C87.3265 0.499878 106.5 19.5314 106.5 42.9999Z"
                stroke="url(#paint1_linear_840_2198)"
              />
            </g>
            <text x="50" y="40" fill="black" fontWeight="bold" fontSize="40">
              {props.details.contributors.length}
            </text>
            <text x="22" y="60" fill="black" fontWeight="bold">
              Contributers
            </text>
            <defs>
              <filter
                id="filter0_bd_840_2198"
                x="0.333328"
                y="-20.0001"
                width="126.667"
                height="126"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_840_2198"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-10" dy="10" />
                <feGaussianBlur stdDeviation="6" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_840_2198"
                  result="effect2_dropShadow_840_2198"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_840_2198"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_840_2198"
                x1="20.4938"
                y1="91.7332"
                x2="95.5744"
                y2="15.0078"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E43A19" />
                <stop offset="1" stopColor="white" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_840_2198"
                x1="35.5"
                y1="72.0249"
                x2="95.7371"
                y2="16.1988"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="row mt-3">
        <h2 style={{ textDecoration: "underline", fontFamily: "cursive" }}>
          Description
        </h2>
        <div className="mt-1">
          {/* {props.details.description.length > 200 && (
            <p
              dangerouslySetInnerHTML={{
                __html:
                  props.details.description.substring(200, 0) + " . . . .",
              }}
            />
          )} */}
          {/* {html_to_text(props.details.description)} */}
          {/* {props.details.description.length <= 200 && (
            <p
              dangerouslySetInnerHTML={{
                _html: props.details.description.substring(200, 0),
              }}
            />
          )} */}

          {removeHTML(props.details.description).length > 200 &&
            removeHTML(props.details.description).substring(200, 0) +
              " . . . ."}
          {removeHTML(props.details.description).length <= 200 &&
            removeHTML(props.details.description).substring(200, 0)}

          {/* {props.details.description.length > 200 &&
            props.details.description.substring(200, 0) + " . . . ."}
          {props.details.description.length <= 200 &&
            props.details.description.substring(200, 0)} */}
        </div>
      </div>
      <Link to={url + props.details._id}>
        <button className="my-3 readmore rounded-pill px-2">Read more</button>
      </Link>
      <hr className="hr mt-1" />
      <div className="row mt-3">
        <div className="col-lg-1  col-1">
          {isLiked === false ? (
            <img
              src="https://img.icons8.com/ios/50/FFFFFF/hearts--v1.png"
              // src={Like}
              alt="feed icon"
              className="absolute mt-0.3 ml-1"
              width="26px"
              onClick={toggleLiked}
            />
          ) : (
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/FF0000/like.png"
              // src={Like}
              alt="feed icon"
              className="absolute mt-0.3 ml-1"
              width="26px"
              onClick={toggleLiked}
            />
          )}
        </div>
        <div className="text-start col-lg-1 col-1 ">{likes_count}</div>

        <div className="offset-lg-1 col-lg-1 d offset-1 col-1">
          <img
            // src={Chat}
            src="https://img.icons8.com/material/48/FFFFFF/comments--v1.png"
            alt="feed icon"
            className="absolute mr-4 mt-1"
            width="22px"
          />
        </div>
        <div className="text-start col-lg-1 col-1 ">
          {props.details.comment_count}
        </div>
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
        <div className="text-start col-lg-1 col-1">{starred_count}</div>
        <div className="offset-lg-3 col-lg-1 offset-3 col-1">
          {/* <img src={Share} alt="feed icon" className="absolute mt-1" />
           */}
          <RWebShare
            data={{
              text: `${removeHTML(props.details.description)}`,
              url: `https://idyfy.tech/idea/${props.details._id.toString()}`,
              title: `${props.details.title}`,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            {/* <button>Share 🔗</button> */}
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/share--v1.png"
              alt="feed icon"
              className="absolute mt-1"
              width="22px"
            />
          </RWebShare>
        </div>
      </div>
    </div>
  );
};

export default FeedTile;
