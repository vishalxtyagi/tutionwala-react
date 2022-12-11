import React from "react";
import "../styles/More.css";

const More = () => {
  return (
    <>
      <div className="title">More Videos</div>
      <div className="iframe">
        <iframe
          width="33%"
          height="320"
          src="https://www.youtube.com/embed/LH9WLEV_vzw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="33%"
          height="320"
          src="https://www.youtube.com/embed/eWhMZS7Un3Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="33%"
          height="320"
          src="https://www.youtube.com/embed/MtWIRto9W0o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default More;
