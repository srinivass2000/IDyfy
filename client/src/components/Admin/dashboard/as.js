// import React from 'react'

// export const as = () => {
//   return (
//     <div>
        

//       <div className=" text-white d-none d-lg-block">
//         <ul className="nav nav-pills nav-fill">
//           <li className="nav-item">
//             <button
//               className="nav-link text-white"
//               onClick={() => setShowValue(1)}
//               style={showvalue === 1 ? active : notActive}
//             >
//               TITLE
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className="nav-link text-white"
//               onClick={() => setShowValue(2)}
//               style={showvalue === 2 ? active : notActive}
//             >
//               TAGS
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className="nav-link text-white"
//               onClick={() => setShowValue(3)}
//               style={showvalue === 3 ? active : notActive}
//             >
//               PEOPLE
//             </button>
//           </li>
//         </ul>
//       </div>

//       <div className="row mt-10">
//         <div className="col-12 flex justify-center d-lg-none mb-10">
//           <select
//             class="form-select form-select-sm mx-2 "
//             aria-label=".form-select-sm example"
//             style={{ width: "150px", backgroundColor: "#B287FF" }}
//             onChange={handleChange}
//           >
//             <option value="1"> Idea Title</option>
//             <option value="2">Idea Tag</option>
//             <option value="3"> People</option>
//             <option value="4"> Similar Ideas</option>
//           </select>
//         </div>

//           {showvalue === 1 && (
//             <>
            
//             <div className="offset-lg-1 col-lg-10">
//               <span
//                 className="p-2 text-white d-lg-none"
//                 style={{
//                   backgroundColor: "red",
//                 }}
//               >
//                 IDEA TITLE
//               </span>
//               {console.log("Here")}
//               {resultName ? (
//                 resultName.map((idea, index) => (
//                   <div key={index} className="row ">
//                     <Link to = {urlidea + idea._id}>  
//                     <div className="mx-10 " style={{ marginTop: "15px" }}>
//                       <div
//                         className="relative rounded"
//                         style={{
//                           borderTop: "2px solid #B287FF",
//                           borderBottom: "2px solid #B287FF",
//                           margin: "18px",
//                           height: "12rem",
//                         }}
//                       >
//                         <hr />
//                         <h1
//                           className="d-flex align-items-start mt-3 mb-1 mx-5"
//                           style={{
//                             color: "white",
//                             fontWeight: "bold",
//                             fontSize: "1.4rem",
//                           }}
//                         >
//                           {idea.title}
//                         </h1>
//                         {/* <hr className="ml-9" style={{background:"white"}}/> */}
//                         <h3
//                           className="d-flex align-items-start my-3 mx-5"
//                           style={{
//                             color: "white",
//                             fontSize: "1rem",
//                           }}
//                         >
//                           {idea.contributors.length +
//                             " users are contributing to this idea"}
//                         </h3>
//                         <div className=" row absolute bottom-0 left-0">
//                           <hr
//                             className="mx-10"
//                             style={{ background: "#B287FF" }}
//                           />
//                           <div className="col d-flex align-items-start">
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {idea.liked_users.length + " "} Likes
//                             </span>
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {idea.liked_users.length + " "} Comments
//                             </span>
//                           </div>
//                           <div className="col d-flex justify-content-end">
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {"Created at : " + idea.date}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <FeedTile details={idea} className="" /> */}
//                     </Link>
//                   </div>
                  
//                 ))
//               ) : (
//                 <div>
//                   <div class="text-light" role="status">
//                     <span class="sr-only">Loading...</span>
//                   </div>
//                 </div>
//               )}
//               {/* <FeedTile /> */}
//               {/* <button onClick={getideas}>load more</button> */}
//             </div>
//             </>
//           )}
//           {showvalue === 2 && (
//             <div className="offset-lg-1 col-lg-12">
//               <span
//                 className="p-2 text-white d-lg-none"
//                 style={{
//                   backgroundColor: "red",
//                 }}
//               >
//                 IDEA TAG
//               </span>
//               {console.log("Here")}
//               {resultTag ? (
//                 resultTag.map((idea, index) => (
//                   <div key={index} className="row ">
//                     <Link to = {urlidea + idea._id}>  
//                     <div className="mx-10 col-9" style={{ marginTop: "15px" }}>
//                       <div
//                         className="relative rounded"
//                         style={{
//                           borderTop: "2px solid #B287FF",
//                           borderBottom: "2px solid #B287FF",
//                           margin: "18px",
//                           height: "12rem",
//                         }}
//                       >
//                         <hr />
//                         <h1
//                           className="d-flex align-items-start mt-3 mb-1 mx-5"
//                           style={{
//                             color: "white",
//                             fontWeight: "bold",
//                             fontSize: "1.4rem",
//                           }}
//                         >
//                           {idea.title}
//                         </h1>
//                         {/* <hr className="ml-9" style={{background:"white"}}/> */}
//                         <h3
//                           className="d-flex align-items-start my-3 mx-5"
//                           style={{
//                             color: "white",
//                             fontSize: "1rem",
//                           }}
//                         >
//                           {idea.contributors.length +
//                             " users are contributing to this idea"}
//                         </h3>
//                         <div className=" row absolute bottom-0 left-0">
//                           <hr
//                             className="mx-10"
//                             style={{ background: "#B287FF" }}
//                           />
//                           <div className="col d-flex align-items-start">
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {idea.liked_users.length + " "} Likes
//                             </span>
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {idea.liked_users.length + " "} Comments
//                             </span>
//                           </div>
//                           <div className="col d-flex justify-content-end">
//                             <span
//                               className="my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {"Created at : " + idea.date}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <FeedTile details={idea} className="" /> */}
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div>
//                   <div class=" text-light" role="status">
//                     <span class="sr-only">Loading...</span>
//                   </div>
//                 </div>
//               )}
//               {/* <FeedTile /> */}
//               {/* <button onClick={gettags}>load more</button> */}
//             </div>
//           )}
//           {showvalue === 3 && (
//             <div className="offset-lg-1 col-lg">
//               <span
//                 className="p-2 text-white d-lg-none"
//                 style={{
//                   backgroundColor: "red",
//                 }}
//               >
//                 PEOPLE
//               </span>
//               {resultPeople ? (
//                 resultPeople.map((user, index) => (
//                   <div className="row ">
//                     <Link to= {urluser + user._id}>
//                     <div className="col-11 " style={{ marginTop: "15px" }}>
//                       <div
//                         className="relative rounded "
//                         style={{
//                           borderTop: "2px solid #B287FF",
//                           borderBottom: "2px solid #B287FF",
//                           margin: "18px",
//                           // height: "12rem",
//                         }}
//                       >
//                         <div className="row">
//                           <div className="col-3">
//                             <div className="rounded-circle ">
//                             <center>
//                               <img
//                                 className="icon profile my-2 ml-9"
//                                 src={user.profile_pic}
//                                 alt="Profile Pic"
//                                 style={{ height: "160px",width:"160px" }}
//                               />{" "}
//                             </center>
//                             </div>
//                           </div>
//                           <div className="col-9">
//                             <hr />
//                             <h1
//                               className="d-flex align-items-start mt-3 mb-1 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontWeight: "bold",
//                                 fontSize: "1.4rem",
//                               }}
//                             >
//                               {user.name}
//                             </h1>
//                             {/* <hr className="ml-9" style={{background:"white"}}/> */}
//                             <h3
//                               className="d-flex align-items-start my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {user.job}
//                             </h3>
//                             <h3
//                               className="d-flex align-items-start my-3 mx-5"
//                               style={{
//                                 color: "white",
//                                 fontSize: "1rem",
//                               }}
//                             >
//                               {"Contributed to " +
//                                 user.ideas_contributed.length}
//                             </h3>
//                           </div>
//                           <div className=" absolute bottom-0 left-0">
//                             <div className="row">
//                               <div className="col-3"></div>
//                               <div className="col-9">
//                                 <hr
//                                   className="mx-10 mt-2"
//                                   style={{ background: "#B287FF" }}
//                                 />
//                                 <div className=" d-flex align-items-start">
//                                   <span
//                                     className="my-3 mx-5"
//                                     style={{
//                                       color: "white",
//                                       fontSize: "1rem",
//                                     }}
//                                   >
//                                     Followers : {user.followers.length}
//                                   </span>
//                                   <span
//                                     className="my-3 mx-5"
//                                     style={{
//                                       color: "white",
//                                       fontSize: "1rem",
//                                     }}
//                                   >
//                                     Score {Math.round(user.engagement_score)}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* <div className="idea col-lg-3 col-md-4 col-5 mr-1 ml-1 text-white ">
//                       <img
//                         className="ml-3 mt-1 icon profile"
//                         src={user.profile_pic}
//                         alt="My Profile"
//                       />
//                       <p className="text-left p-1">{user.name}</p>
//                       <p className="text-left p-1">{user.about}</p>
//                     </div> */}
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div>
//                   <div class="text-light" role="status">
//                     <span class="sr-only">Loading...</span>
//                   </div>
//                 </div>
//               )}
//               {/* <button onClick={getsearch}>load more</button> */}
//             </div>
//           )}
//       </div>
//     </div>
//   )
// }
