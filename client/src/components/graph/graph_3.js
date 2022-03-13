import React, { useEffect, useState } from "react";
import Graph_3_Iterate from "./graph_3_iterate_root";
import "./lib/treestyle.css";
const Graph_3 = () => {
  const Data = [
    { id: 1, parentid: "root", descp: "IDYFY" },
    { id: 2, parentid: 1, descp: "feature id 2" },
    { id: 3, parentid: 1, descp: "feature id 3" },
    { id: 4, parentid: 2, descp: "feature id 4" },
    { id: 5, parentid: 2, descp: "feature id 5" },
    { id: 6, parentid: 3, descp: "feature id 6" },
    { id: 7, parentid: 3, descp: "feature id 7" },
    { id: 8, parentid: 3, descp: "feature id 8" },
  ];
  const allLinks = [
    ["path1", "1", "2"],
    ["path2", "1", "3"],
    ["path3", "2", "4"],
    ["path4", "2", "5"],
    ["path5", "3", "6"],
    ["path6", "3", "7"],
    ["path7", "3", "8"],
  ];
  const [TreeData, SetTreeData] = useState(Data);

  function connectCard() {
    let svg = document.getElementById("tree__svg-container__svg");

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

  return (
    <div>
      <div>
        <button onClick={connectCard}>svg</button>
        <div id="mytree">
          <div id="tree__container">
            <div className="tree__container__step__card" id="1">
              <div class="dropdown">
                <p
                  class="tree__container__step__card__p"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {TreeData[0].descp}
                </p>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="/idea">
                      View / Edit
                    </a>
                  </li>

                  <li>
                    <a
                      class="dropdown-item"
                      href="/createFeature/idea_id/feature_id"
                    >
                      Add Child
                    </a>
                  </li>
                  <li onclick="HideTree(1)">Hide/Show Children</li>
                </ul>
              </div>
            </div>
            <div
              id="from_tree__container__step__card__first"
              className="tree__container__branch"
            >
              <Graph_3_Iterate tree={TreeData} id={1} />
            </div>
          </div>
          <div id="tree__svg-container">
            <svg id="tree__svg-container__svg"></svg>
          </div>
        </div>
      </div>
      {/* {connectCard()} */}
    </div>
  );
};

export default Graph_3;
