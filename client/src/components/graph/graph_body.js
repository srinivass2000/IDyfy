import React, { useEffect, useState, version } from "react";
import Graph from "./graph";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import OtherContributers from "./Other_Contributers";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { toast } from "react-toastify";

const Graph_body = () => {
  const [Version, SetVersion] = useState(0);
  const [MAxVersion, SetMaxVersion] = useState("null");
  const [Whosegraph, SetWhosegraph] = useState("null");
  const [Edit, SetEdit] = useState(false);
  const [Contributers, SetContributers] = useState();
  const [Heighest, SetHeighest] = useState();
  const [canPull, SetcanPull] = useState(true);
  const { idea_id } = useParams();
  const canIEdit = (a) => {
    SetEdit(a);
    // console.log(a);
  };

  const notify = () => toast.success("You succcessfully Pulled the Idea!");
  const notify1 = () => toast.error("There was an error pulling the Idea!");
  const notify2 = () => toast.success("Versioned succcessfully !");
  const notify3 = (a) =>
    toast.error("There was an error while versioning !" + a);
  const createVersion = async () => {
    await axios
      .get(`/api/feature/version-end?idea_id=${idea_id}`, {
        headers: authHeader(),
      })
      .then(
        (res) => {
          console.log(res.data);
          if (res.data.success == true) {
            notify2();
          } else {
            notify3("");
          }
        },
        (err) => {
          // console.log(err.response.data.error);
          notify3(err.response.data.error);
        }
      );
  };

  const pullIdea = async () => {
    await axios
      .get(`/api/feature/pull?idea_id=${idea_id}&from=${Whosegraph}`, {
        headers: authHeader(),
      })
      .then(
        (res) => {
          // console.log(res.data);
          if (res.data.success == true) {
            notify();
          } else {
            notify1();
          }
        },
        (err) => {
          notify1();
        }
      );
  };

  useEffect(async () => {
    await axios
      .get(`/api/feature/idea-details?idea_id=${idea_id}`, {
        headers: authHeader(),
      })
      .then(
        (res) => {
          // console.log(res.data);
          SetMaxVersion(res.data.highest_contributor.latest_version);
          SetWhosegraph(res.data.highest_contributor._id);
          SetContributers(res.data.contributor_names);
          SetHeighest(res.data.highest_contributor);
          console.log(res.data);
          res.data.contributor_names.map((contri, idx) => {
            if (contri._id == res.data.id) {
              // Whosegraph = res.data.id;
              SetMaxVersion(res.data.your_latest_version);
              SetWhosegraph(res.data.id);
              // console.log("hello");
              SetcanPull(false);
            }
          });
        },
        (err) => {
          //
        }
      );
  }, []);

  useEffect(async () => {
    await axios
      .get(
        `/api/feature/get-latest-version?idea_id=${idea_id}&user_id=${Whosegraph}`,
        {
          headers: authHeader(),
        }
      )
      .then(
        (res) => {
          SetMaxVersion(res.data.latest_version);
        },
        (err) => {
          //
        }
      );
  }, [Whosegraph]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            {Contributers ? (
              Contributers.map(
                (contributor, idx) =>
                  Whosegraph == contributor._id && (
                    <p className="text-white mt-2">
                      You a viewing {contributor.name}'s idea at version{" "}
                      {Version == 0 ? <>Latest Workspace</> : Version}
                    </p>
                  )
              )
            ) : (
              <></>
            )}
          </div>
          <div class="dropdown mt-2 offset-lg-3 col-sm-4 col-lg-2 col-4 ">
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
              {MAxVersion == 0 ? (
                <>
                  <li>
                    <a class="dropdown-item" onClick={() => SetVersion(0)}>
                      Not yet versioned
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {[...Array(MAxVersion)].map((elem, index) => (
                    <li key={index}>
                      <a
                        class="dropdown-item"
                        onClick={() => SetVersion(index + 1)}
                      >
                        Version {index + 1}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a class="dropdown-item" onClick={() => SetVersion(0)}>
                      Latest Workspace
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="col-sm-4 col-lg-2 col-4 mt-2">
            {/* {console.log(Contributers)} */}
            <OtherContributers
              SetWhosegraph={SetWhosegraph}
              SetVersion={SetVersion}
              Contributers={Contributers}
              heighest={Heighest}
            />
          </div>
          <div className="col-sm-4 col-lg-2 col-4 mt-2">
            {Edit ? (
              Version == 0 ? (
                <button className="btn btn-secondary" onClick={createVersion}>
                  Create Version
                </button>
              ) : (
                console.log(2)
              )
            ) : canPull ? (
              <button className="btn btn-secondary" onClick={pullIdea}>
                Pull Idea
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* <TransformWrapper
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
              <TransformComponent> */}
        <Graph canIEdit={canIEdit} version={Version} whosegraph={Whosegraph} />
        {/* </TransformComponent>
            </React.Fragment>
          )} 
        </TransformWrapper>*/}
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
