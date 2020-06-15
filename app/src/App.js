import React, { useState } from "react";
import "./App.css";

import youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <VideoDetails video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  );
};

export default App;
