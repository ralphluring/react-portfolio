import React from "react";

function Year(props) {
let year = (props.year - 2000) *2.4;
  return (
   
    <svg className="year-container inner-clock-item">
      <path 
        d={"M 0 0 L" + year  +  " 0 z"}
        stroke="#b2a785" strokeWidth="50" 
        />
        <text x="170" y="20">{props.year}</text>
      </svg>
  )
}

export default Year;