import React, { useEffect, useState } from "react";
import Graph from "./graph";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import OtherContributers from "./Other_Contributers";
import axios from "axios";
import authHeader from "../../services/auth-header";

const Graph_body = () => {
  const [Version, SetVersion] = useState(null);
  const [Whosegraph, SetWhosegraph] = useState(null);
  const [Edit, SetEdit] = useState(false);
  const [Contributers, SetContributers] = useState();
  const [Heighest, SetHeighest] = useState();

  const { idea_id } = useParams();
  const canIEdit = (a) => {
    SetEdit(a);
    // console.log(a);
  };
  useEffect(async () => {
    await axios
      .get(`/api/feature/idea-details?idea_id=${idea_id}`, {
        headers: authHeader(),
      })
      .then(
        (res) => {
          console.log(res.data);
          SetVersion(res.data.highest_contributor.latest_version);
          SetWhosegraph(res.data.highest_contributor._id);
          SetContributers(res.data.contributor_names);
          SetHeighest(res.data.highest_contributor);
        },
        (err) => {
          //
        }
      );
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="dropdown mt-2 offset-lg-6 col-sm-4 col-lg-2 col-4 ">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Versions
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {Version == 0 ? (
                <>
                  <li>
                    <a class="dropdown-item" href="">
                      Not yet versioned
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {[...Array(Version)].map((elem, index) => (
                    <li key={index}>
                      <a class="dropdown-item" href="">
                        Version {index + 1}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 col-4 mt-2">
            {/* {console.log(Contributers)} */}
            <OtherContributers
              SetWhosegraph={SetWhosegraph}
              Contributers={Contributers}
              heighest={Heighest}
            />
          </div>
          <div className="col-sm-4 col-lg-2 col-4 mt-2">
            <button className="btn btn-secondary ">
              {Edit ? <>Create Version</> : <>Pull Idea</>}
            </button>
          </div>
        </div>
      </div>
      <div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={200}
          defaultPositionY={100}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools">
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <button onClick={resetTransform}>x</button>
              </div>
              <TransformComponent>
                <Graph
                  canIEdit={canIEdit}
                  version={Version}
                  whosegraph={Whosegraph}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </>
  );
};
// import React, { useState, useEffect } from "react";
// import DragMove from "./drag";
// import Graph_3 from "./graph_3";

// const Graph_body = () => {
//   const [translate, setTranslate] = useState({
//     x: 0,
//     y: 0,
//   });

//   const handleDragMove = (e) => {
//     setTranslate({
//       x: translate.x + e.movementX,
//       y: translate.y + e.movementY,
//     });
//   };

//   return (
//     <DragMove className="overflowY-hidden" onDragMove={handleDragMove}>
//       <div
//         style={{
//           transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
//         }}
//       >
//         <Graph_3 />
//       </div>
//     </DragMove>
//   );
// };
export default Graph_body;
