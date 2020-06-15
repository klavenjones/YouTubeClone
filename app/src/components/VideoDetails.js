import React from "react";

export const VideoDetails = ({ video }) => {
  if (!video) return <h1>...loading</h1>;
  const { url, height, width } = video.snippet.thumbnails.high;
  const { videoId } = video.id;
  const embed = `https://www.youtube.com/embed/${videoId}`;
 
  return (
    <div>
      <h1>Video Details</h1>
      <h2>{video.snippet.title}</h2>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={embed}
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  );
};
