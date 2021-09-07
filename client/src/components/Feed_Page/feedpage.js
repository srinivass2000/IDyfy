import React from "react";
import FeedTile from "../Feed_Tile/feed";

const FeedPage = () => {
  return (<div className="container">
  <div className="row my-3">
    <div className="col-5">
    <hr className="mt-2" style={{width: "100%",height: "2px",color:"white"}}/>
    </div>
    <div className="col-2">
      <button className="btn-sm mb-1" style={{ "background-color":"#840FCC", color:"white"}}>MY FEED</button>
    </div>
    <div className="col-5">
    <hr className="mt-2" style={{width: "100%",height: "2px",color:"white"}}/>
    </div>
  </div>
  
  {/* map */}
  <div className="row ">
    <div className="offset-3 col-6">
      <FeedTile />
    </div>
  </div>
</div>);
};

export default FeedPage;
