import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("react tutorials");

  // Fetch videos from YouTube Data API
  const fetchVideos = async (searchQuery) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos(query);
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setQuery={setQuery} query={query} />
      <div style={{ flex: 1, padding: "20px", background: "#121212", color: "white", marginLeft: "60px" }}>
        <h1>YouTube Clone</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "60%",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "none",
          }}
        />

        {/* Video list */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {videos.map((video) => (
            <div key={video.id.videoId} style={{ background: "#1f1f1f", padding: "10px", borderRadius: "8px" }}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <h4 style={{ marginTop: "10px" }}>{video.snippet.title}</h4>
              <p style={{ fontSize: "14px", color: "#aaa" }}>{video.snippet.channelTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
