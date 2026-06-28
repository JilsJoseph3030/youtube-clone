import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#202020" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <YouTubeIcon sx={{ color: "red", mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            YouTube Clone
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, mx: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            sx={{
              background: "#fff",
              borderRadius: 1,
              width: "100%",
            }}
          />
        </Box>

        {/* Icons */}
        <Box>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
