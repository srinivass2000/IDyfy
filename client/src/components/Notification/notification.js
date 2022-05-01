import React, { useEffect, useState } from "react";
import error_logo from "../../assets/svg/error.svg";
import attention_logo from "../../assets/svg/Attention.svg";
import success_logo from "../../assets/svg/Success.svg";
import info_logo from "../../assets/svg/Information.svg";
import axios from "axios";
import authHeader from "../../services/auth-header";
const Notification = () => {
  //const [ideas, setIdeas] = useState();
  const [events, setEvents] = useState();
  //const [users_liked, setUsers_liked] = useState();

  const getideas = async () => {
    try {
      // console.log(skip);
      await axios
        .get("/api/idea/get-notification", {
          headers: authHeader(),
        })
        .then(
          (res) => {
            //setIdeas(res.data.ideas);
            //setUsers_liked(res.data.liked_users);
            setEvents(res.data.events[0].events);
            console.log(res.data.events[0].events);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  const icons = {
    "idea created": success_logo,
    "idea updated": success_logo,
    "feature created": success_logo,
    "feature updated": success_logo,
    "feature deleted": error_logo,
    "idea pulled": info_logo,
    "user updated": info_logo,
  };

  const title = {
    "idea created": "You created idea : ",
    "idea updated": "You updated idea : ",
    "feature created": "You created feature : ",
    "feature updated": "You updated feature : ",
    "feature deleted": "You deleted feature : ",
    "idea pulled": "You pulled idea : ",
    "user updated": "You updated profile",
  };

  useEffect(() => {
    getideas();
    //    getstarredideas();
    //updateideas();
  }, []);

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
      <div className="row">
        <div className="container  my-4">
          {events ? (
            events.map((event, index) => (
              <div className="row my-5">
                <div className="col col-2"></div>
                <div className="col col-8">
                  <div className="px-4" style={{ background: "#D6BEFF" }}>
                    <div className="row">
                      <div className="my-2 text-left col-10">
                        <h1
                          style={{ fontSize: "1.2rem", fontWeight: "bolder" }}
                        >
                          {/* {console.log(event)} */}
                          {title[event.type]} {event.detail.title}
                        </h1>
                        {/* <p>lorem...</p> */}
                        <div className="mt-4">
                          <button
                            className="btn btn-sm"
                            style={{ border: "1px solid black" }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div className="col-2 mt-4">
                        <img
                          src={icons[event.type]}
                          className="float-left"
                          alt="error"
                          style={{ height: "90px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-2"></div>
              </div>
            ))
          ) : (
            <>
              <div
                className="spinner-border text-white place-content-center"
                role="status"
              >
                <span class="visually-hidden">
                  <h1 style={{ color: "white" }}>
                    No Notifications Available Right Now :)
                  </h1>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
