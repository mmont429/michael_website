import React from "react";
import "./button.scss";

function DownloadButton(content, url) {
  return (
    <div>
      <a href={url} download>
        <div className="project-card-button">{content}</div>
      </a>
    </div>
  );
}

export default DownloadButton;
