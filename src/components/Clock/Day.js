import React from "react";

function Day(props) {
    let dayStr = "";
    switch (props.day) {
        case 0:
            dayStr = "Sunday";
            break;
        case 1:
            dayStr = "Monday";
            break;
        case 2:
            dayStr = "Tuesday";
            break;
        case 3:
            dayStr = "Wednesday";
            break;
        case 4:
            dayStr = "Thursday";
            break;
        case 5:
            dayStr = "Friday";
            break;
        case 6:
            dayStr = "Saturday";
            break; 
        default:
            break;
    }
  let Day = props.day + 34.2857;
  return (
   <svg className="day-container inner-clock-item">
      <path d={"M 0 0 L" + Day  +  " 0 z"}
         stroke="#b2a785" strokeWidth="50"/>
        <text x="170" y="20" >{dayStr}</text>
      </svg>
  )
}

export default Day;