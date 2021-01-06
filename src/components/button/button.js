import React from "react";

function Button(content, url, theme) {
  return (
    <div>
      <a href={url}>
        <div
          className="project-card-button"
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </div>
      </a>
    </div>
  );
}

export default Button;
