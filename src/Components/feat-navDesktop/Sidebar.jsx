import { Link } from "react-router-dom";
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
    padding: "12px 24px",
    transition: "background-color 0.3s, color 0.3s, border-radius 0.3s",
    borderRadius: "10px",
    color: "#0F172A",
    "&:hover": {
      backgroundColor: "#00E5FF",
      color: "white",
    },
  };

  const topMenuItems = [
    {
      icon: <HomeIcon />,
      text: "Home",
      href: "/home",
    },
    {
      icon: <CalendarMonthIcon />,
      text: "Calendar",
      href: "/calendar",
    },
    {
      icon: <EmojiEventsIcon />,
      text: "All Activity",
      href: "/all-activity",
    },
    {
      icon: <RunCircleIcon />,
      text: "Add Activity",
      href: "/add-activity",
    },
    {
      icon: <PetsIcon />,
      text: "Dog",
      href: "/dog",
    },
    {
      icon: <PersonIcon />,
      text: "Profile",
      href: "/profile",
    },
    {
      icon: <SettingsIcon sx={{}} />,
      text: "Setting",
      href: "/setting",
    },
  ];

  const bottomMenuItems = [
    {
      icon: <HelpIcon />,
      text: "Help",
      href: "/help",
    },
    {
      icon: <LogoutIcon />,
      text: "Logout",
      href: "/logout",
    },
  ];

  const renderItemList = (menuItems) =>
    menuItems.map(({ icon, text, href }, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton component={Link} to={href} sx={buttonStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={<Typography sx={{ fontSize: "16px" }}>{text}</Typography>}
          />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Box className="px-5">
      <List>{renderItemList(topMenuItems)}</List>
      <Box
        sx={{ position: "absolute", bottom: 10, left: 0, right: 0 }}
        className="px-5"
      >
        <List sx={{ position: "relative", witdth: "100%" }}>
          {renderItemList(bottomMenuItems)}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
