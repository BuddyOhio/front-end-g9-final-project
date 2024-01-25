import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PetsIcon from "@mui/icons-material/Pets";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import RunCircleIcon from "@mui/icons-material/RunCircle";


const Sidebar = () => {
  const buttonStyle = {
    width: "100%",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    transition: "background-color 0.3s, color 0.3s, border-radius 0.3s",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#0F172A",
    },
  };

  return (
    <Box
      bgcolor="#B8ECF7"
      flex={1.2}
      p={2}
      // sx={{ display: { xs: "none", md: "block" } }}
      height="100vh"
      position="relative"
      className="hidden md:block"
    >
      {/* Top Section */}
      {/* Not herf but Link ----------------------------------------------*/}
      <List>
        {[
          {
            icon: <HomeIcon sx={{ color: "#0F172A" }} />,
            text: "Home",
            href: "#home",
          },
          {
            icon: <CalendarMonthIcon sx={{ color: "#0F172A" }} />,
            text: "Calendar",
            href: "#calendar",
          },
          {
            icon: <EmojiEventsIcon sx={{ color: "#0F172A" }} />,
            text: "All Activity",
            href: "#all-activity",
          },
          {
            icon: <RunCircleIcon sx={{ color: "#0F172A" }} />,
            text: "Add Activity",
            href: "#add-activity",
          },
          {
            icon: <PetsIcon sx={{ color: "#0F172A" }} />,
            text: "Dog",
            href: "#dog",
          },
          {
            icon: <PersonIcon sx={{ color: "#0F172A" }} />,
            text: "Profile",
            href: "#profile",
          },
          {
            icon: <SettingsIcon sx={{ color: "#0F172A" }} />,
            text: "Setting",
            href: "#setting",
          },
        ].map(({ icon, text, href }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={href} sx={buttonStyle}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "20px" }}>{text}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Bottom Section */}
      <List sx={{ position: "absolute", bottom: 10, width: "90%" }}>
        {[
          {
            icon: <HelpIcon sx={{ color: "#0F172A" }} />,
            text: "Help",
            href: "#help",
          },
          {
            icon: <LogoutIcon sx={{ color: "#0F172A" }} />,
            text: "Logout",
            href: "#logout",
          },
        ].map(({ icon, text, href }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={href} sx={buttonStyle}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "20px" }}>{text}</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
