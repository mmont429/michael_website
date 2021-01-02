import React from "react";
//import "./backgroundPhoto.scss";

function backgroundPhoto() {
  return (
    <div className="image-container">
      <img
        src={require("../../Images/IMGbackground.webp")}
        alt="Me Sailing"
        className="backgroundPhoto"
      />
    </div>
  );
}

export default backgroundPhoto;
