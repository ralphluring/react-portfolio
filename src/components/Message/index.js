import React from "react";
import "./style.css";

 function Message() {
  return (
    <div className="message-container">
      <input className="message-input" type="text"/>  
      <button> Submit</button>
    </div>
   

  );
}

export default Message;