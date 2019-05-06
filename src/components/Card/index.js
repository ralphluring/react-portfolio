import React from "react";
import "./style.css";


function Card() {
  return (
    <div className="card-container">
      <div className="card-header">
          <h1>Card Header</h1>
      </div>
      <div className="card-image">
          <img src="https://via.placeholder.com/240" alt="project title"/>
      </div>
      <div className="card-footer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate architecto quaerat consequatur at ullam, tempora cum corrupti enim itaque maxime eaque possimus a nisi natus incidunt dolore delectus illo ipsum.</p>
      </div>

    </div>
    
  );
}

export default Card;