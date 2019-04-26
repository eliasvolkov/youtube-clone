import React, { Component } from "react";
import videolist from "./VideoList.scss";
import VideoCardHor from "../VideoCardHor/VideoCardHor";

export default class VideoList extends Component {
  render() {
    return (
      <div className={videolist.container}>
        <h4>Результат</h4>
        <div className={videolist.row}>
          <VideoCardHor />
          <VideoCardHor />
          <VideoCardHor />
          <VideoCardHor />
          <VideoCardHor />
          <VideoCardHor />
        </div>
      </div>
    );
  }
}
