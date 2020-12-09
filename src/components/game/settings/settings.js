import React, { useState, useEffect } from "react";
import "./settings.css";
import Slider from "../slider/slider";
function Settings() {
  return (
    <div className="bar">
      <div className="miniBar">
        <div className="allin">ALL IN </div>
        <div className="amountChips">1800c</div>
      </div>
      <Slider />
    </div>
  );
}
export default Settings;