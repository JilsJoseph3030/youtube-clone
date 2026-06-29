import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Sidebar = ({ setQuery }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (value) => {
    setQuery(value);
  };

  return (
    <Box
      sx={{
        width: isOpen ? 200 : 60,
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
      <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ color: "white", m: 1 }}>
        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <Box sx={{ p: 2 }}>
        {isOpen ? (
          <>
            <p style={{ cursor: "pointer" }} onClick={() => handleClick("home")}>Home</p>
            <p style={{ cursor: "pointer" }} onClick={() => handleClick("trending")}>Trending</p>
          </>
        ) : (
          <>
            <p style={{ cursor: "pointer" }} onClick={() => handleClick("home")}>🏠</p>
            <p style={{ cursor: "pointer" }} onClick={() => handleClick("trending")}>🔥</p>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
