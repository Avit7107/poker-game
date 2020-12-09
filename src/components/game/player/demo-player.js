import React from "react";
import "./player.css";

function Player(props) {
  return (
    <div>
     
        <div className={props.className}>
          {<img src={props.img.picture.thumbnail} />}
          <br></br>
          <span>{`${props.name.title}:`}</span>
          <span>{props.users.name.first}</span>
          <span>{`${props.users.name.last}`}</span>
          <br></br>
          <span>{22}</span>
          {/* <span>{`${props.users.name.first}`}</span>
<span>{`${props.users.name.last}`}</span>}  img={props.users}  credit={props.users}  /> */}
        </div>
    
    </div>
  );
}
export default Player;


