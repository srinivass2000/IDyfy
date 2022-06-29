import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./lib/treestyle.css";
import { toast } from "react-toastify";

import axios from "axios";
import authHeader from "../../services/auth-header";
const Graph_iterate_children = (props) => {
  let TreeData = props.tree,
    cardkey = "",
    Edit = props.Edit,
    // strokeWidth = "",
    strokeColor = "",
    _id = props._id;
  let Version = props.version;
  const handleClick = (item) => {
    console.log(item);
    if (item.show == "nothing") {
      item.show = false;
      // console.log("ew");
      localStorage.setItem("idea", JSON.stringify(TreeData));
    }
  };

  const DeleteFeature = async (id, pid) => {
    await axios
      .get(`/api/feature/delete-feature?idea_id=${TreeData[0]._id}&id=${id}`, {
        headers: authHeader(),
      })
      .then((res) => {
        if (res.data.success == true) {
          toast.success("Deleted " + res.data.deleted_feature.title);
          props.Clicked(pid);
        }
      });
  };
  return (
    // <div className="tree__container__step">
    <>
      <div className="tree__container__branch">
        {TreeData.map((item, key) =>
          item.parent_id === _id ? (
            <div className="tree__container__step" key={"div" + key}>
              <div
                className="tree__container__step__card dropdown"
                id={item._id}
              >
                {/* no change */}
                {item.updated == 0 && (strokeColor = "")}
                {/* updated feature */}
                {item.updated == 1 &&
                  (strokeColor = "border border-5 border-warning")}
                {/* new feature */}
                {item.updated == 2 &&
                  (strokeColor = "border border-5 border-success")}

                <p
                  className={`tree__container__step__card__p +${strokeColor}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.title}
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"../feature/" + TreeData[0]._id + "/" + item._id}
                    >
                      {Edit ? (
                        localStorage.getItem("version") == 0 ? (
                          <>Edit</>
                        ) : (
                          <>View</>
                        )
                      ) : (
                        <>View</>
                      )}
                    </Link>
                  </li>
                  {Edit ? (
                    localStorage.getItem("version") == 0 ? (
                      <>
                        <li>
                          <Link
                            className="dropdown-item"
                            to={
                              "/createFeature/" +
                              TreeData[0]._id +
                              "/" +
                              item._id
                            }
                            onClick={() => handleClick(item)}
                          >
                            Add Child
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to={
                              "/createFeature/" +
                              TreeData[0]._id +
                              "/" +
                              item.parent_id
                            }
                          >
                            Add Sibling
                          </Link>
                        </li>
                        {item.leaf ? (
                          <li
                            className="dropdown-item"
                            onClick={() => {
                              DeleteFeature(item._id, item.parent_id);
                            }}
                          >
                            Delete feature
                          </li>
                        ) : (
                          <></>
                        )}{" "}
                      </>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </ul>
                {!(item.show === "nothing") && (
                  <button
                    className="HideShow relative"
                    onClick={() => props.Clicked(item._id)}
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      height: "25px",
                      width: "25px",
                      right: "-5px",
                      borderRadius: "20px",
                    }}
                  >
                    {(!item.show && "+") || (item.show && "-")}
                  </button>
                )}
              </div>
              {/* {path()} */}
              <Graph_iterate_children
                tree={TreeData}
                _id={item._id}
                Clicked={props.Clicked}
              />
            </div>
          ) : (
            <div key={"div" + key}></div>
          )
        )}
      </div>
      {/* // </div> */}
    </>
  );
};

export default Graph_iterate_children;
