import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchResults from "./pages/SearchResults";
import SidebarNav from "./components/SidebarNav";

const App = () => (
  <Box sx={{ backgroundColor: "#000" }}>
    <Navbar />
    <SidebarNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:query" element={<SearchResults />} />
    </Routes>
  </Box>
);

export default App;
