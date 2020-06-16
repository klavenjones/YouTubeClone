import React from "react";

export const VideoDetails = ({ video }) => {
  if (!video) return <h1>Loading.....</h1>;

  const { videoId } = video.id;
  const { id } = video;
  let ID = videoId ? videoId : id;

  const embed = `https://www.youtube.com/embed/${ID}`;

  return (
    <div className="detail">
      <h1>Featured Video</h1>
      <h2>{video.snippet.title}</h2>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          class="u-full-width"
          height="405"
          src={embed}
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  );
};
