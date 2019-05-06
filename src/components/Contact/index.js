import React from "react";
import "./style.css";


function Contact(props) {
  return (
    <p>BennettChrisLloyd@gmail.com <span className="close-button" onClick={props.handleClose}> X</span></p>    
  );
}

export default Contact;