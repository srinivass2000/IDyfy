import React, { useEffect, useState } from "react";
import Graph_3_Iterate from "./graph_3_iterate_root";
import "./lib/treestyle.css";
const Graph_3 = () => {
  let Data = [
    { id: 1, parentid: "root", descp: "IDYFY" },
    { id: 2, parentid: 1, descp: "feature id 2" },
    { id: 3, parentid: 1, descp: "feature id 3" },
    { id: 4, parentid: 2, descp: "feature id 4" },
    { id: 5, parentid: 2, descp: "feature id 5" },
    { id: 6, parentid: 3, descp: "feature id 6" },
    { id: 7, parentid: 3, descp: "feature id 7" },
    { id: 8, parentid: 3, descp: "feature id 8" },
  ];
  const [allLinks, SetAllLinks] = useState([]);
  // let allLinks = [];
  let ShowHideArray = new Array(Data.length).fill(0);
  ShowHideArray[0] = 1;
  const [TreeData, SetTreeData] = useState(Data);
  const Clicked = (p) => {
    console.log("Clicked on item " + p);
    if (ShowHideArray[p] === 0) {
      ShowHideArray[p] = 1;
    } else {
      ShowHideArray[p] = 0;
    }
    console.log(ShowHideArray);
    // SetTreeData([
    //   { id: 1, parentid: "root", descp: "IDYFY" },
    //   { id: 2, parentid: 1, descp: "feature id 2" },
    //   { id: 3, parentid: 1, descp: "feature id 3" },
    //   { id: 4, parentid: 2, descp: "feature id 4" },
    //   { id: 5, parentid: 2, descp: "feature id 5" },
    // ]);
  };
  let pathNumber = 1,
    strokeWidth = "5px",
    strokeColor = "#FFFFFfff";

  function generatepath() {
    TreeData.map((data, key) => {
      key == 0 ? <></> : allLinks.push(["path" + key, data.parentid, data.id]);
    });
  }

  const path = () => {
    let newpath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    let svgContainer = document.getElementById("tree__svg-container__svg");
    newpath.id = "path" + pathNumber;
    newpath.setAttribute("stroke", strokeColor);
    newpath.setAttribute("fill", "none");
    newpath.setAttribute("stroke-width", strokeWidth);
    svgContainer.appendChild(newpath);
    pathNumber++;
  };

  function connectCard() {
    let svg = document.getElementById("tree__svg-container__svg");
    generatepath();
    for (let i = 0; allLinks.length > i; i++) {
      path();
    }
    for (let i = 0; allLinks.length > i; i++) {
      console.log(document.getElementById(allLinks[i][0]));
      connectElements(
        svg,
        document.getElementById(allLinks[i][0]),
        document.getElementById(allLinks[i][1]),
        document.getElementById(allLinks[i][2])
      );
    }
  }

  function signum(x) {
    return x < 0 ? -1 : 1;
  }

  function absolute(x) {
    return x < 0 ? -x : x;
  }

  function drawPath(svg, path, startX, startY, endX, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)

    let stroke = parseFloat(path.getAttribute("stroke-width"));
    // check if the svg is big enough to draw the path, if not, set heigh/width
    if (svg.getAttribute("height") < endY) svg.setAttribute("height", endY);
    if (svg.getAttribute("width") < startX + stroke)
      svg.setAttribute("width", startX + stroke);
    if (svg.getAttribute("width") < endX + stroke)
      svg.setAttribute("width", endX + stroke);

    let deltaX = (endX - startX) * 0.15;
    let deltaY = (endY - startY) * 0.15;
    // for further calculations which ever is the shortest distance
    let delta = deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);

    // set sweep-flag (counter/clock-wise)
    // if start element is closer to the left edge,
    // draw the first arc counter-clockwise, and the second one clock-wise
    let arc1 = 0;
    let arc2 = 1;
    if (startX > endX) {
      arc1 = 1;
      arc2 = 0;
    }
    // draw tha pipe-like path
    // 1. move a bit down, 2. arch,  3. move a bit to the right, 4.arch, 5. move down to the end
    path.setAttribute(
      "d",
      "M" +
        startX +
        " " +
        startY +
        " V" +
        (startY + delta) +
        " A" +
        delta +
        " " +
        delta +
        " 0 0 " +
        arc1 +
        " " +
        (startX + delta * signum(deltaX)) +
        " " +
        (startY + 2 * delta) +
        " H" +
        (endX - delta * signum(deltaX)) +
        " A" +
        delta +
        " " +
        delta +
        " 0 0 " +
        arc2 +
        " " +
        endX +
        " " +
        (startY + 3 * delta) +
        " V" +
        endY
    );
  }

  function connectElements(svg, path, startElem, endElem) {
    let svgContainer = document.getElementById("tree__svg-container");

    // if first element is lower than the second, swap!
    if (startElem.offsetTop > endElem.offsetTop) {
      let temp = startElem;
      startElem = endElem;
      endElem = temp;
    }

    // get (top, left) corner coordinates of the svg container
    let svgTop = svgContainer.offsetTop;
    let svgLeft = svgContainer.offsetLeft;

    // calculate path's start (x,y)  coords
    // we want the x coordinate to visually result in the element's mid point
    let startX = startElem.offsetLeft + 0.5 * startElem.offsetWidth - svgLeft; // x = left offset + 0.5*width - svg's left offset
    let startY = startElem.offsetTop + startElem.offsetHeight - svgTop; // y = top offset + height - svg's top offset

    // calculate path's end (x,y) coords
    let endX = endElem.offsetLeft + 0.5 * endElem.offsetWidth - svgLeft;
    let endY = endElem.offsetTop - svgTop;

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endX, endY);
  }

  useEffect(() => {
    connectCard();
  }, [TreeData]);
  return (
    <div>
      <div>
        <div id="mytree">
          <div id="tree__svg-container">
            <svg id="tree__svg-container__svg"></svg>
          </div>
          <div id="tree__container">
            <div className="tree__container__step__card" id="1">
              <div className="dropdown">
                <p
                  className="tree__container__step__card__p"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {TreeData[0].descp}
                </p>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="/idea">
                      View / Edit
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="/createFeature/idea_id/feature_id"
                    >
                      Add Child
                    </a>
                  </li>
                  <li>Hide/Show Children</li>
                </ul>
                <button
                  className="HideShow relative"
                  onClick={() => Clicked(1)}
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
            </div>
            <div
              id="from_tree__container__step__card__first"
              className="tree__container__branch"
            >
              <Graph_3_Iterate
                tree={TreeData}
                id={1}
                pathno={1}
                Clicked={Clicked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph_3;
