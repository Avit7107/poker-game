import React, { useState, useEffect } from "react";
import "./slider.css";
import ReactSlider from "react-slider";

function Slider() {
  return (
    <div className="sliderParent">
      <div className="fold">Fold</div>
      <div className="call">Call</div>
      <div className="raiseTo">Raise To</div>
      <div className="slider">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 50, 100]}
          ariaLabel={["Leftmost thumb", "Middle thumb", "Rightmost thumb"]}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </div>
    </div>
  );
}
export default Slider;