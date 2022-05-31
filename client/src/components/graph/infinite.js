import React, { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import "./lib/infinite.css";
import "objectFitPolyfill";

const Infinite = () => {
  window.objectFitPolyfill();
  const initialOptions = {
    centerContent: false,
    limitToBounds: false,
    limitToWrapper: true,
  };
  const [options, setOptions] = useState(initialOptions);
  const onLoad = (e) => {
    console.log(e.target.naturalWidth, e.target.width);
    setOptions({
      ...initialOptions,
      defaultScale: e.target.width / e.target.naturalWidth,
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <TransformWrapper options={options}>
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-4">
                      <button onClick={zoomIn}>+</button>
                    </div>
                    <div className="col-4">
                      <button onClick={zoomOut}>-</button>
                    </div>
                    <div className="col-4">
                      <button onClick={resetTransform}>/</button>
                    </div>
                  </div>
                  <div className="row imgcss">
                    <TransformComponent>
                      <img
                        src="https://www.iucn.org/sites/dev/files/media-uploads/2018/06/palm_oil_full_final-infographic_tiny_2000_6829.png"
                        alt="title"
                        className="img"
                        onLoad={onLoad}
                      />
                    </TransformComponent>
                  </div>
                </React.Fragment>
              )}
            </TransformWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infinite;
