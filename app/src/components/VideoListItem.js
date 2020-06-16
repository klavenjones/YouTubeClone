import React from "react";

export const VideoListItem = ({ video, onVideoSelect }) => {
  const { url, height, width } = video.snippet.thumbnails.default;
  console.log(video);
  return (
    <div className="list__item">
      <h2 onClick={() => onVideoSelect(video)}>{video.snippet.title}</h2>
      <div>
        <img src={url} alt="thumbnail" height={height} width={width} />
      </div>
    </div>
  );
};
