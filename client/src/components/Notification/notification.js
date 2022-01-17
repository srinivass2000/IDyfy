import React from "react";

const Notification = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-5 col-4 ">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
        <div className="col-lg-2 col-4">
          <button
            className="btn-sm mb-1"
            style={{ backgroundColor: "#840FCC", color: "white" }}
          >
            NOTIFICATIONS
          </button>
        </div>
        <div className="col-lg-5 col-4">
          <hr
            className="mt-2"
            style={{ width: "100%", height: "2px", color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
