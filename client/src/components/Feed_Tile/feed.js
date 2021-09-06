import React from "react";

const FeedTile = () => {
  return (
    <div className="border">
      <div className="row">
        <div className="offset-1 mt-5 col-8">
          <div className="row">Title</div>
          <div className="row">Field</div>
        </div>

        <div className="col-3 mt-5">
          <div className="rounded-circle">
            <h1>5</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedTile;
