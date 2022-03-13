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
    { id: 6, parentid: 3, descp: "feature id 5" },
    { id: 7, parentid: 3, descp: "feature id 5" },
    { id: 8, parentid: 3, descp: "feature id 5" },
  ];
  const [TreeData, SetTreeData] = useState(Data);
  return (
    <div>
      <div>
        <div id="mytree">
          <div id="tree__svg-container"></div>
          <div id="tree__container">
            <div
              className="tree__container__step__card"
              id="tree__container__step__card__first"
            >
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
              <Graph_3_Iterate tree={TreeData} id={1} start={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph_3;
