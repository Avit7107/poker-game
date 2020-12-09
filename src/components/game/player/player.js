import React from "react";
import "./player.css";

function Player(props) {
  return (
    <div>
      <div className={props.className}>
        <img src={props.pictuer} />
        <br></br>
        <span>{props.name}</span>
        <br></br>
        <span>{props.credit}</span>
      </div>
    </div>
  );
}
export default Player;