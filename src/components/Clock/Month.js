import React from "react";

function Month(props) {
    let monthStr = "";
    switch (props.month) {
        case 0:
            monthStr = "January";
            break;
        case 1:
            monthStr = "February";
            break;
        case 2:
            monthStr = "March";
            break;
        case 3:
            monthStr = "April";
            break;
        case 4:
            monthStr = "May";
            break;
        case 5:
            monthStr = "June";
            break;
        case 6:
            monthStr = "July";
            break; 
        case 7:
            monthStr = "August";
            break; 
        case 8:
            monthStr = "September";
            break; 
        case 9:
            monthStr = "October";
            break; 
        case 10:
            monthStr = "November";
            break; 
        case 11:
            monthStr = "December";
            break; 
        default:
            break;
    }
    let month = props.month *20 + 20;
  return (
   <svg className="month-container inner-clock-item">
      <path d={"M 0 0 L" + month  +  " 0 z"}
         stroke="#b2a785" strokeWidth="50"/>
        <text x="170" y="20" >{monthStr}</text>
      </svg>
  )
}

export default Month;