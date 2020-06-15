import React from "react";

export const VideoDetails = ({ video }) => {
  if (!video) return <h1>Loading.....</h1>;

  const { videoId } = video.id;
  const { id } = video;
  let ID = videoId ? videoId : id;

  const embed = `https://www.youtube.com/embed/${ID}`;

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
