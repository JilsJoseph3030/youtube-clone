import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadIcon from "@mui/icons-material/Download";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className="sidebar" style={{ width: sidebarOpen ? "240px" : "72px" }}>
      <div className="sidebar-item"><HomeIcon /> {sidebarOpen && <span>Home</span>}</div>
      <div className="sidebar-item"><WhatshotIcon /> {sidebarOpen && <span>Trending</span>}</div>
      <div className="sidebar-item"><SubscriptionsIcon /> {sidebarOpen && <span>Subscriptions</span>}</div>
      <div className="sidebar-item"><VideoLibraryIcon /> {sidebarOpen && <span>Library</span>}</div>
      <div className="sidebar-item"><HistoryIcon /> {sidebarOpen && <span>History</span>}</div>
      <div className="sidebar-item"><PlaylistPlayIcon /> {sidebarOpen && <span>Playlists</span>}</div>
      <div className="sidebar-item"><ThumbUpIcon /> {sidebarOpen && <span>Liked videos</span>}</div>
      <div className="sidebar-item"><DownloadIcon /> {sidebarOpen && <span>Downloads</span>}</div>
    </div>
  );
};

export default Sidebar;
