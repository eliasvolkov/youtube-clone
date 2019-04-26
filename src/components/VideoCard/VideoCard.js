import React from "react";
import card from "./VideoCard.scss";

const VideoCard = () => {
  return (
    <div className={card.container}>
      <div className={card.card}>
        <div className={card.img}>
          <img src="https://fakeimg.pl/213x118/" />
          <div className={card.duration_max}>01:04:29</div>
        </div>
        <h3 className={card.headline}>
          My Linux Ubuntu Setup for Software Development
        </h3>
        <div className={card.author}>ForrestKnight</div>
        <div className={card.views}>просмотров 45 тыс.</div>
        <div className={card.time}> Неделю назад</div>
      </div>
    </div>
  );
};

export default VideoCard;
