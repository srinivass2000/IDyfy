import React, { useState, useEffect } from "react";
import DragMove from "./drag";
import Graph_3 from "./graph_3";

const Graph_5 = () => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  return (
    <DragMove className="overflowY-hidden" onDragMove={handleDragMove}>
      <div
        style={{
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        }}
      >
        <Graph_3 />
      </div>
    </DragMove>
  );
};

export default Graph_5;
