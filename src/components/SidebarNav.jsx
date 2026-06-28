import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const SidebarNav = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const sidebarContent = (
    <List sx={{ width: 240 }}>
      <ListItemButton>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><HistoryIcon /></ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
        <ListItemText primary="Library" />
      </ListItemButton>
    </List>
  );

  return (
    <>
      {!isDesktop && (
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ color: "white", position: "fixed", top: 70, left: 10, zIndex: 1300 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {isDesktop ? (
        <Drawer variant="permanent" open anchor="left">
          {sidebarContent}
        </Drawer>
      ) : (
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {sidebarContent}
        </Drawer>
      )}
    </>
  );
};

export default SidebarNav;
