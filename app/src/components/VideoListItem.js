import React from "react";

export const VideoListItem = ({ video, onVideoSelect }) => {
  const { url, height, width } = video.snippet.thumbnails.medium;
  console.log(video);
  return (
    <div className="list__item">
      <div>
        <img src={url} alt="thumbnail" height={height} width={width} />
        <h2 onClick={() => onVideoSelect(video)}>{video.snippet.title}</h2>
        <p>{video.snippet.title}</p>
      </div>
    </div>
  );
};
