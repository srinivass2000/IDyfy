import React from "react";
import Idyfy_logo from "../../assets/svg/nav.svg";
import search from "../../assets/icons/search.svg";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icon/list.png";
import my_idea from "../../assets/icons/my_idea.svg";
import starred from "../../assets/icons/starred.svg";
import notifications from "../../assets/icons/notifications.svg";
import profile from "../../assets/images/dummy_profile.png";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import New_idea from "../NewIdeas/newideas";
// const Navbar = () => {
//   return (
//     <div>
//       <div
//         className="flex content-center mb-5"
//         style={{ backgroundColor: "#B287FF" }}
//       >
//         <div className="ml-5">
//           <img src={Idyfy_logo} alt="IDYFY LOGO" />
//         </div>
//         <div className="pt-4 ml-3">
//           <img src={Idyfy_name} alt="IDYFY NAME" />
//         </div>
//         <div className="relative pt-3">
//           c
//         </div>
//         <div className="flex-auto flex flex-col">
//           <Link className="links home" to="/feed">
//             <div className="flex justify-center pt-3">
//               <img className="icon" src={home} alt="home" />
//             </div>
//             <div>
//               <h6>Home</h6>
//             </div>
//           </Link>
//         </div>
//         <New_idea />
//         <div className="flex-auto flex flex-col">
//           <Link className="links" to="/myideas">
//             <div className="flex justify-center pt-3">
//               <img src={my_idea} alt="My Ideas" />
//             </div>
//             <div>
//               <h6>My Ideas</h6>
//             </div>
//           </Link>
//         </div>

//         <div className="flex-auto flex flex-col">
//           <Link className="links" to="/starred">
//             <div className="flex justify-center pt-3">
//               <img src={starred} alt="Starred Ideas" />
//             </div>
//             <div>
//               <h6>Starred Ideas</h6>
//             </div>
//           </Link>
//         </div>
//         <div className="flex-auto flex flex-col">
//           <Link className="links" to="/notification">
//             <div className="flex justify-center pt-3">
//               <i className="image-hover">
//                 <img src={notifications} alt="Notifications" />
//               </i>
//             </div>
//             <div>
//               <h6>Notifications</h6>
//             </div>
//           </Link>
//         </div>
//         <div className="flex-auto flex flex-col">
//           <div className="flex justify-center pt-3">
//             <div className="dropdown">
//               <Link to="/profile">
//                 <img
//                   className="icon dropdown-toggle"
//                   src={profile}
//                   alt="My Profile"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg "
        style={{ backgroundColor: "#B287FF" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand mr-20" href="/feed">
            <img src={Idyfy_logo} alt="IDYFY LOGO" style={{ height: "70px" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img
                className="icon"
                src={list}
                alt="home"
                style={{
                  height: "30px",
                }}
              />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="links home" to="/feed">
                  <div className="flex justify-center pt-2 pr-4 pl-4">
                    <img className="icon" src={home} alt="home" />
                  </div>
                  <div>
                    <h6>Home</h6>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <New_idea />
              </li>
              <li class="nav-item">
                <Link className="links" to="/myideas">
                  <div className="flex justify-center  pt-2 pr-6 pl-6">
                    <img src={my_idea} alt="My Ideas" />
                  </div>
                  <div>
                    <h6>My Ideas</h6>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <Link className="links" to="/starred">
                  <div className="flex justify-center  pt-2 pr-10 pl-10">
                    <img src={starred} alt="Starred Ideas" />
                  </div>
                  <div>
                    <h6>Starred Ideas</h6>
                  </div>
                </Link>
              </li>
              <li class="nav-item">
                <Link className="links" to="/notification">
                  <div className="flex justify-center pt-2 pr-10 pl-10">
                    <i className="image-hover">
                      <img src={notifications} alt="Notifications" />
                    </i>
                  </div>
                  <div>
                    <h6>Notifications</h6>
                  </div>
                </Link>
              </li>
            </ul>
            <form class="d-flex justify-center">
              <input
                type="text"
                className="h-10 mr-2 p-1 rounded-xl z-0 focus:shadow focus:outline-none border"
                placeholder="Search for Ideas..."
              />
              <button className="pt-1">
                <img src={search} alt="Search" style={{ height: "20px" }} />
              </button>
            </form>
            <Link to="/profile" className="mt-2 d-flex justify-center">
              <img
                className="ml-3 mt-1 icon dropdown-toggle"
                src={profile}
                alt="My Profile"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
