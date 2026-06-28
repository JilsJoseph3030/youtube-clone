import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const SidebarNav = () => (
  <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
    <List>
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
  </Drawer>
);

export default SidebarNav;
