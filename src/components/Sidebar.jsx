import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      sx={{
        width: {
          xs: isOpen ? "70%" : "0px",   // mobile
          sm: isOpen ? 240 : 60,        // tablet/desktop
        },
        height: "100vh",
        bgcolor: "#181818",
        color: "white",
        transition: "width 0.3s ease",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
      }}
    >
      {/* Toggle button */}
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        sx={{ color: "white", m: 1 }}
      >
        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      {/* Sidebar content */}
      <Box sx={{ p: 2 }}>
        {isOpen ? (
          <>
            <p>Home</p>
            <p>Trending</p>
            <p>Subscriptions</p>
          </>
        ) : (
          <>
            <p>🏠</p>
            <p>🔥</p>
            <p>📺</p>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
