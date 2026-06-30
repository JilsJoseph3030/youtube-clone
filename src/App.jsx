import React, { useState } from "react";
import sampleVideos from "./sampleVideos";
import "./App.css";
import Sidebar from "./components/Sidebar";

// Material UI icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function App() {
  const [videos, setVideos] = useState(sampleVideos);
  const [query, setQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const filtered = sampleVideos.filter((v) =>
        v.title.toLowerCase().includes(query.toLowerCase())
      );
      setVideos(filtered.length ? filtered : sampleVideos);
    } else {
      setVideos(sampleVideos);
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <MenuIcon
            style={{ color: "white", marginRight: "20px", cursor: "pointer" }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="navbar-logo">YouTube</div>
        </div>
        <div className="navbar-center">
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <SearchIcon style={{ color: "white" }} />
            </button>
            <MicIcon style={{ color: "white", marginLeft: "8px" }} />
          </form>
        </div>
        <div className="navbar-right">
          <VideoCallIcon style={{ color: "white" }} />
          <NotificationsIcon style={{ color: "white" }} />
          <AccountCircleIcon style={{ color: "white" }} />
        </div>
      </div>

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

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: sidebarOpen ? "240px" : "72px" }}>
        {selectedVideo && (
          <div className="player">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={() => setSelectedVideo(null)}>Close Player</button>
          </div>
        )}

        {/* Video Grid */}
        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setSelectedVideo(video.id)}
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
    </>
  );
}

export default App;
