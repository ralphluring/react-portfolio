import React from "react";

function Hours(props) {
  let hours = props.hours *10;
  let nightDay = "";
  let nightHours;
 
  if(props.hours > 12){
    nightDay = "PM";
    nightHours = props.hours - 12;
  }else{
    nightDay = "AM";
    nightHours = props.hours;
  }
  return (
   <svg className="hours-container inner-clock-item">
      <path d={"M 0 0 L" + hours  +  " 0 z"}
         stroke={props.hours > 12 ? "#323644" : "yellow"} strokeWidth="50" />
        <text 
        x="170" 
        y="20"
        fill={props.hours > 12 ? "white" : "black"}
        >
          {nightHours}
          </text>
          <text x="5" y="20"  fill={props.hours > 12 ? "white" : "black"}>{nightDay}</text>
      </svg>
  )
}

export default Hours;