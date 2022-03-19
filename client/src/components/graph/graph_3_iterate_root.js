import React, { useEffect, useState } from "react";
import Graph_3_Iterate2 from "./graph_3_iterate_children";
import "./lib/treestyle.css";
const Graph_3_Iterate = (props) => {
  let TreeData = props.tree,
    cardkey = "",
    //   pathNumber = props.pathno,
    //   strokeWidth = "5px",
    //   strokeColor = "red",
    id = props.id;
  // const path = () => {
  //   let newpath = document.createElementNS(
  //     "http://www.w3.org/2000/svg",
  //     "path"
  //   );
  //   let svgContainer = document.getElementById("tree__svg-container__svg");
  //   newpath.id = "path" + pathNumber;
  //   newpath.setAttribute("stroke", strokeColor);
  //   newpath.setAttribute("fill", "none");
  //   newpath.setAttribute("stroke-width", strokeWidth);
  //   svgContainer.appendChild(newpath);
  //   pathNumber++;
  // };
  return (
    // <div className="tree__container__step">
    <>
      {TreeData.map((item, key) =>
        item.parentid === id ? (
          <div className="tree__container__step" key={"div" + key}>
            <div className="tree__container__step__card dropdown" id={item.id}>
              {/* {(cardkey = "card_" + item.id)} */}
              <p
                // id={cardkey}
                className="tree__container__step__card__p"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {item.descp}
              </p>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/feature/idea_id/feature_id"
                  >
                    {" "}
                    View / Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/createfeature/idea_id/feature_id"
                  >
                    Add Child
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/createfeature/idea_id/feature_id"
                  >
                    Add Sibling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">Show/Hide Children </a>
                </li>
              </ul>
              <button
                className="HideShow relative"
                onClick={() => props.Clicked(item.id)}
                style={{
                  color: "white",
                  backgroundColor: "red",
                  height: "25px",
                  width: "25px",
                  right: "-5px",
                  borderRadius: "20px",
                }}
              >
                +
              </button>
            </div>

            {/* {path()} */}
            <Graph_3_Iterate2
              tree={TreeData}
              id={item.id}
              Clicked={props.Clicked}
            />
          </div>
        ) : (
          <div key={"div" + key}></div>
        )
      )}
    </>
  );
};

export default Graph_3_Iterate;
