import React, { useState, useEffect } from "react";

import "./App.css";
import logo from "./logo.png";

import youtube from "./api/youtube";
import { SearchBar, VideoDetails, VideoList } from "./components";

export const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const {
        data: { items: mostPopular },
      } = await youtube.get("videos", {
        params: {
          part: "snippet",
          maxResults: 15,
          chart: "mostPopular",
          key: process.env.REACT_APP_API_KEY,
        },
      });

      setVideos(mostPopular);
      setSelectedVideo(mostPopular[0]);
    }

    fetchData();
  }, []);

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 15,
        type: "video",
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <nav>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <SearchBar onSubmit={handleSubmit} />
          </nav>
        </div>
      </div>
      <div className="row content">
        <div className="seven columns">
          <div className="featured">
            <VideoDetails video={selectedVideo} />
          </div>
        </div>
        <div className="five columns border">
          <div className="list">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
