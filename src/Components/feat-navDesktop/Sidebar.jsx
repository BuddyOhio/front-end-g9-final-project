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
      href: "/pet",
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
      // axios call onclick for delete cookie
    },
  ];

  const renderItemList = (menuItems) =>
    menuItems.map(({ icon, text, href }, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton component={Link} to={href} sx={buttonStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontSize: "16px" }}
                className="subpixel-antialiased font-medium"
              >
                {text}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    ));

  return (
    <Box className="px-5 z-50">
      <List>{renderItemList(topMenuItems)}</List>
      <Box
        sx={{ position: "absolute", bottom: 10, left: 0, right: 0 }}
        className="px-5"
      >
        <List sx={{ position: "relative", witdth: "100%" }}>
          {renderItemList(bottomMenuItems)}
        </List>
      </Box>

      {/* vector-dog-feet */}
      <Box className="absolute top-10 right-0 -rotate-45 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="134"
          viewBox="0 0 140 134"
          fill="none"
        >
          <path
            d="M60.7043 47.3312C64.672 34.6106 50.7679 23.1288 40.4442 20.8211C31.8412 18.8981 19.9915 21.4829 16.9394 31.268C12.9717 43.9886 26.8758 55.4704 37.1995 57.778C45.8025 59.7011 57.6522 57.1162 60.7043 47.3312ZM49.1064 84.5144C52.1584 74.7293 43.3608 67.5291 34.7578 65.6061C23.5739 63.1061 4.78644 67.2804 0.818735 80.0009C-2.23334 89.786 6.56425 96.9862 15.1673 98.9092C26.046 102.388 44.8334 98.2134 49.1064 84.5144ZM63.0887 10.1819C59.121 22.9025 71.8596 35.1705 83.0435 37.6705C90.7863 39.4012 99.7498 37.218 102.497 28.4114C106.464 15.6909 93.7258 3.42284 82.5419 0.922875C74.7991 -0.807867 65.5304 2.35391 63.0887 10.1819ZM63.205 101.273C52.0211 98.7734 33.4835 105.097 29.821 116.839C27.0742 125.646 33.5961 131.29 41.3388 133.021C52.5227 135.521 71.0603 129.197 74.7228 117.455C77.4696 108.649 70.9478 103.004 63.205 101.273ZM71.2511 69.5766C65.1469 89.1467 84.436 121.72 103.363 125.951C111.966 127.874 116.683 121.601 119.125 113.773C122.787 102.031 118.652 91.6861 122.009 80.9225C125.061 71.1375 134.69 63.8694 138.048 53.1058C140.489 45.2778 141.516 36.0866 132.052 33.9713C113.126 29.7406 77.3552 50.0065 71.2511 69.5766Z"
            fill="#00B4D8"
            fillOpacity="0.3"
          />
        </svg>
      </Box>
      <Box className="absolute bottom-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="271"
          height="262"
          viewBox="0 0 271 262"
          fill="none"
        >
          <path
            opacity="0.5"
            d="M188.546 129.954C205.846 147.027 240.595 134.658 255.818 120.21C268.504 108.171 277.073 87.1569 263.765 74.0242C246.464 56.9518 211.715 69.3208 196.492 83.7682C183.807 95.8078 175.238 116.822 188.546 129.954ZM137.975 80.0501C151.283 93.1828 173.16 85.3017 185.846 73.2621C202.337 57.6107 215.794 24.2295 198.493 7.15709C185.185 -5.97555 163.308 1.90556 150.623 13.9451C132.801 28.2832 119.344 61.6644 137.975 80.0501ZM249.14 165.192C231.84 148.12 197.028 157.971 180.537 173.623C169.12 184.458 163.026 200.547 175.003 212.366C192.304 229.439 227.115 219.587 243.606 203.936C255.023 193.1 259.787 175.698 249.14 165.192ZM94.035 88.2607C110.526 72.6093 120.053 37.8055 104.083 22.0464C92.1058 10.227 75.3655 15.8095 63.9484 26.6451C47.457 42.2965 37.9307 77.1003 53.9003 92.8594C65.8775 104.679 82.6179 99.0963 94.035 88.2607ZM139.158 127.877C112.542 101.612 36.0159 104.68 8.10741 131.167C-4.57829 143.207 0.931611 156.012 11.578 166.518C27.5476 182.277 49.6733 184.465 64.3121 198.91C77.6201 212.043 79.4488 233.494 94.0876 247.94C104.734 258.446 119.248 267.858 133.203 254.614C161.111 228.127 165.774 154.143 139.158 127.877Z"
            fill="#DADADA"
          />
        </svg>
      </Box>
      <Box className="absolute top-60 -left-2 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="80"
          viewBox="0 0 83 80"
          fill="none"
        >
          <path
            d="M45.7271 51.9446C42.7658 59.4566 49.98 66.8062 55.6873 68.5284C60.4433 69.9636 67.2895 68.7966 69.5675 63.0182C72.5288 55.5062 65.3146 48.1566 59.6073 46.4343C54.8513 44.9991 48.005 46.1661 45.7271 51.9446ZM54.3832 29.9865C52.1053 35.7649 56.6736 40.3764 61.4297 41.8116C67.6126 43.6773 78.4714 41.7815 81.4327 34.2695C83.7106 28.491 79.1423 23.8796 74.3863 22.4444C68.4312 20.0008 57.5723 21.8967 54.3832 29.9865ZM42.2826 74.1822C45.2439 66.6702 38.7332 58.8863 32.5503 57.0205C28.2698 55.7288 23.0782 56.7485 21.0281 61.9491C18.0668 69.4611 24.5776 77.2451 30.7604 79.1108C35.0409 80.4025 40.4603 78.8049 42.2826 74.1822ZM47.3568 19.4606C53.5397 21.3264 64.3785 18.1313 67.112 11.1971C69.1622 5.99652 65.7929 2.39346 61.5124 1.10179C55.3296 -0.763968 44.4907 2.43113 41.7572 9.36526C39.7071 14.5659 43.0764 18.1689 47.3568 19.4606ZM41.0187 38.2387C45.5745 26.6818 36.5055 6.48734 26.0422 3.32991C21.2861 1.89471 18.2648 5.50907 16.4424 10.1318C13.7089 17.066 15.4636 23.4147 12.9579 29.771C10.68 35.5495 4.82501 39.6019 2.31929 45.9582C0.49695 50.5809 -0.60197 56.0686 4.6297 57.6473C15.093 60.8047 36.4628 49.7956 41.0187 38.2387Z"
            fill="#4A74A5"
            fillOpacity="0.39"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Sidebar;
