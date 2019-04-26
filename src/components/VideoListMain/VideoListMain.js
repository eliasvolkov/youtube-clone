import React, { Component } from "react";
import videolistm from "./VideoListMain.scss";
import VideoCard from "../VideoCard/VideoCard";

export default class VideoListMain extends Component {
  render() {
    return (
      <div className={videolistm.container}>
        <h4>Популярные</h4>
        <div className={videolistm.row}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    );
  }
}
