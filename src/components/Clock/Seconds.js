import React from "react";


function Seconds(props) {
  let seconds = props.seconds * 4;
  return (
     <svg className="seconds-container inner-clock-item">
      <path d={"M 0 0 L" + seconds  +  " 0 z"}
         stroke="#b2a785" strokeWidth="50" />
        <text x="170" y="20">{props.seconds}</text>
      </svg>
  )
}

export default Seconds;