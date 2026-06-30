import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import sampleVideos from "./sampleVideos";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

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
    navigate("/"); // Redirect to home feed if searching
  };

  const handleLogoClick = () => {
    setVideos(sampleVideos);
    setQuery("");
    navigate("/");
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
          <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            YouTube
          </div>
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

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Content wrapper containing routes */}
      <div className="content-wrapper" style={{ marginLeft: sidebarOpen ? "240px" : "72px" }}>
        <Routes>
          <Route path="/" element={<Home videos={videos} />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

