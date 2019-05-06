import React from "react";
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Day from './Day';
import Month from './Month';
import Year from './Year';
import DayOfMonth from './DayOfMonth';
import "./style.css";

function Clock(props) {
  return (
    <div className="clock-container">
      <Hours hours={props.time.getHours()}/>
      <Minutes minutes={props.time.getMinutes()}/>
      <Seconds seconds={props.time.getSeconds()}/>
      <Day day={props.time.getDay()}/>
      <Month month={props.time.getMonth()}/>
      <DayOfMonth dayOfMonth={props.time.getDate()}/>
      <Year year={props.time.getFullYear()}/>
    </div>
  );
}

export default Clock;