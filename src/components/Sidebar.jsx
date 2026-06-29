import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const Sidebar = () => {
  // State to track open/closed
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      sx={{
        width: isOpen ? 240 : 60,   // collapse width
        height: "100vh",
        bgcolor: "#181818",
        color: "white",
        transition: "width 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "flex-start",
          textTransform: "none",
        }}
      >
        {isOpen ? "Collapse ◀" : "Expand ▶"}
      </Button>

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
