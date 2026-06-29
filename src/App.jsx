import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import sampleVideos from "./sampleVideos";

function App() {
  const [videos, setVideos] = useState(sampleVideos);
  const [query, setQuery] = useState("");

  const fetchVideos = async (searchQuery) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${searchQuery}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );
      const data = await res.json();

      if (data.error) {
        console.warn("API quota exceeded or error:", data.error.message);
        // fallback: filter hard-coded videos
        const filtered = sampleVideos.filter((v) =>
          v.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setVideos(filtered.length ? filtered : sampleVideos);
      } else {
        setVideos(data.items || sampleVideos);
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
      const filtered = sampleVideos.filter((v) =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setVideos(filtered.length ? filtered : sampleVideos);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchVideos(query);
    } else {
      setVideos(sampleVideos); // reset to all
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setQuery={setQuery} />
      <div style={{ flex: 1, padding: "20px", background: "#121212", color: "white", marginLeft: "60px" }}>
        <h1>YouTube Clone (Always Results)</h1>

        {/* Search bar */}
        <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search videos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px",
              width: "60%",
              borderRadius: "4px",
              border: "none",
            }}
          />
          <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setVideos(sampleVideos);
            }}
            style={{ marginLeft: "10px", padding: "10px" }}
          >
            Clear
          </button>
        </form>

        {/* Video list */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {videos.map((video) => (
            <div key={video.id.videoId || video.id} style={{ background: "#1f1f1f", padding: "10px", borderRadius: "8px" }}>
              <img
                src={video.snippet ? video.snippet.thumbnails.medium.url : video.thumbnail}
                alt={video.snippet ? video.snippet.title : video.title}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <h4 style={{ marginTop: "10px" }}>{video.snippet ? video.snippet.title : video.title}</h4>
              <p style={{ fontSize: "14px", color: "#aaa" }}>
                {video.snippet ? video.snippet.channelTitle : video.channelTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
