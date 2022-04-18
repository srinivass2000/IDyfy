import React from "react";
import Modal from "react-modal";
import { isMobile } from "react-device-detect";

const OtherContributers = (props) => {
  //   let subtitle;
  let customStyles;
  if (isMobile) {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "90%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        overflow: "hidden",
      },
    };
  } else {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        overflow: "hidden",
      },
    };
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  //modal end
  const selectWhoseIdea = (id) => {
    props.SetWhosegraph(id);
    closeModal();
  };

  let contributers = props.Contributers;
  let heighest = props.heighest;

  return (
    <div>
      <button
        className="mr-1 h-10 btn px-3 rounded button bg-success text-white"
        onClick={openModal}
      >
        Contributers
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
          <div
            className="row justify-center p-2 text-white"
            style={{ "background-color": " #840fcc" }}
          >
            Idea name
          </div>
          <div className="row" style={{ "background-color": "#B287FF" }}>
            <div className="col-6 ">
              <div className="row flex justify-center">
                <div className="row flex justify-center text-white">
                  Heighest Contributer
                </div>
                <img
                  style={{
                    "border-radius": "100%",
                    height: "200px",
                    width: "200px",
                  }}
                  src={heighest ? heighest.profile_pic : <></>}
                  alt="My Profile"
                  className="profileimage"
                />
              </div>
              <div className="row flex justify-center">
                {heighest ? (
                  //  console.log(heighest)
                  heighest.name
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-6 ">
              <p className="row flex justify-center">Checkout others work</p>
              <div class="dropdown mt-2  flex justify-center">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other Contributers
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {/* {console.log(contributers)} */}
                  {contributers ? (
                    <>
                      {/* {console.log(contributers)} */}
                      {contributers.map((contributer, idx) => {
                        <li
                          key={idx}
                          onClick={() => selectWhoseIdea(contributer._id)}
                        >
                          <a class="dropdown-item">{contributer.name}</a>
                          kkk
                        </li>;
                      })}
                    </>
                  ) : (
                    <li>
                      {/* <a class="dropdown-item">{contributer.name}</a> */}
                      kkk
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OtherContributers;
