import React from "react";

function DayOfMonth(props) {

    let dayOfMonth = props.dayOfMonth *7.7;
  return (
   <svg className="month-container inner-clock-item">
      <path d={"M 0 0 L" + dayOfMonth  +  " 0 z"}
         stroke="#b2a785" strokeWidth="50"/>
        <text x="170" y="20" >{props.dayOfMonth}</text>
      </svg>
  )
}

export default DayOfMonth;