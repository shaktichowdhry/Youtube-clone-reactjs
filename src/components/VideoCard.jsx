import React from "react";
import "./css/VideoCard.css";
import Avatar from "@material-ui/core/Avatar";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoCard({ images, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      {/* <h4>video</h4> */}
      <img className="videoCard__thumbnail" src={images} alt="VideoSnapshot" />
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>
            {channel} <MusicNoteIcon style={{ fontSize: 14 }} />
          </p>
          <p>
            {views} &bull; {timestamp}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
