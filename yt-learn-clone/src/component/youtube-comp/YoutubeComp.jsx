import "./YoutubeComp.css";
import React from "react";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="/HipWallpaper.jpg" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.name}</p>
    </div>
  );
};
export default YoutubeComp;
