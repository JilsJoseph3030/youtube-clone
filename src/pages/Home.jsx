import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ videos }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Horizontal Category Bar */}
      <div className="category-bar">
        <span className="category">All</span>
        <span className="category">Music</span>
        <span className="category">Gaming</span>
        <span className="category">Movies</span>
        <span className="category">News</span>
        <span className="category">Live</span>
        <span className="category">AI</span>
        <span className="category">Laptop</span>
      </div>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => navigate(`/watch/${video.id}`)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <div className="video-title">{video.title}</div>
              <div className="video-meta">{video.channelTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

