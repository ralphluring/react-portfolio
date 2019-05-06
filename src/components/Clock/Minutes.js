import React from "react";

function Minutes(props) {
  let minutes = props.minutes * 4;
  return (
    <svg className="minutes-container inner-clock-item">
      <path d={"M 0 0 L" + minutes  +  " 0 z"}
         stroke="#b2a785" strokeWidth="50" />
        <text x="170" y="20">{props.minutes}</text>
      </svg>
  )
}

export default Minutes;