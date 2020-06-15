import React from "react";

export const VideoListItem = ({ video, onVideoSelect }) => {
  const { url, height, width } = video.snippet.thumbnails.default;
  console.log(video);
  return (
    <div>
      <h1>Video List Item</h1>
      <h3 onClick={() => onVideoSelect(video)}>{video.snippet.title}</h3>
      <div>
        <img src={url} alt="thumbnail" height={height} width={width} />
      </div>
    </div>
  );
};
