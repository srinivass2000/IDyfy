import React, { useEffect, useState } from "react";
import Graph_3_Iterate2 from "./graph_3_iterate_children";
import "./lib/treestyle.css";
const Graph_3_Iterate = (props) => {
  let TreeData = props.tree,
    cardkey = "",
    start = props.start,
    id = props.id;
  return (
    // <div className="tree__container__step">
    <>
      {TreeData.map((item, key) =>
        item.parentid === id ? (
          <>
            <div class="tree__container__step">
              <div class="tree__container__step__card dropdown" id={key}>
                {(cardkey = "card_" + key)}
                <p
                  id={cardkey}
                  class="tree__container__step__card__p"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.descp}
                </p>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/feature/idea_id/feature_id">
                      {" "}
                      View / Edit
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/createfeature/idea_id/feature_id"
                    >
                      Add Child
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/createfeature/idea_id/feature_id"
                    >
                      Add Sibling
                    </a>
                  </li>
                </ul>
              </div>
              <Graph_3_Iterate2 tree={TreeData} id={item.id} start={false} />
            </div>
          </>
        ) : (
          <></>
        )
      )}

      {/* // </div> */}
    </>
  );
};

export default Graph_3_Iterate;
