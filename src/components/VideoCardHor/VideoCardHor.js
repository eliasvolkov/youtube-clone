import React from "react";
import card from "./VideoCardHor.scss";

const VideoCardHor = () => {
  return (
    <div className={card.container}>
      <div className={card.card}>
        <div className={card.img}>
          <img src="https://i.ytimg.com/vi/OM_QJkD-Mr8/mqdefault.jpg" />
          <div className={card.duration_min}>04:29</div>
        </div>
        <div className={card.content}>
          <div className={card.title}>
            <h3 className={card.headline}>
              My Linux Ubuntu Setup for Software Development
            </h3>
            <div className={card.info}>ForrestKnight</div>
            <div className={card.info}>45 тыс. просмотров</div>
            <div className={card.info}> Неделю назад</div>
          </div>
          <div className={card.descr}>
            {/* A look into my Ubuntu software development environment VM I use at
            work as a software engineer. The OS is Ubuntu Linux ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardHor;
