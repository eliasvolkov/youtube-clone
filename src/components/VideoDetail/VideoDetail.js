import React from "react";
import video from "./VideoDetail.scss";

function VideoDetail() {
  return (
    <div className={video.container}>
      <div className={video.video}>
        <iframe
          height="480"
          src="https://www.youtube.com/embed/bhopW92Qxw8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className={video.text}>
        <h4 className={video.headline}>
          My Linux Ubuntu Setup for Software Development
        </h4>
        <p className={video.info}>48 986 просмотров</p>
      </div>
    </div>
  );
}

export default VideoDetail;
