import React from "react";
import { VideoListItem } from "./VideoListItem";

export const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => (
    <VideoListItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));
  return (
    <div>
      <h1>Video List</h1>
      {videoList}
    </div>
  );
};
