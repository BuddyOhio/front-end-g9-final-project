import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  // IconButton,
  // Menu,
  // MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../../public/logo.png";
import { useGlobalContext } from "../Context";
// import logo from "../../public/navbarDesktop-logo.svg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  height: "60px", 
  backgroundColor: "#0093E9",
  backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  // borderBottomLeftRadius: "15px", 
  // borderBottomRightRadius: "15px",
  "&:hover": {
    backgroundColor: "#0077CC",
  },
  
});

const LogoImage = styled("img")({
  width: "40px",
});

const DogGoTypography = styled(Typography)({
  display: { xs: "none", sm: "block" },
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginLeft: "10px",
  flexGrow: 0.8,
});

const UserGreeting = styled("div")({
  color: "#ECF0F1",
  padding: "0 10px",
  flexGrow: 7,
});

const Icons = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
  flexGrow: 1,
  "& > button": {
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#3498db",
    },
  },
});

// const NotificationIcon = styled(NotificationsIcon)({
//   color: "#ECF0F1",
// });

// const SettingsIconStyled = styled(SettingsIcon)({
//   color: "#ECF0F1",
// });

const AvatarStyled = styled(Avatar)({
  width: "30px",
  height: "30px",
  cursor: "pointer",
});

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const { getUserProfile } = useGlobalContext();

  return (
    <AppBar
      className="fixed z-50"
      // position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none",  }}
      
    >
      <StyledToolbar className="rounded-b-xl md:rounded-none">
        <div className="flex lg:px-10">
          <LogoImage src={logo} alt="Dog-go logo" />
          <DogGoTypography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block", color: "#0F172A" } }}
            className="pt-1"
          >
            DOG GO
          </DogGoTypography>
        </div>

        <UserGreeting className="text-sm lg:text-base lg:px-16">
          Welcome! <br />
          Kanjana Kannarest
          { getUserProfile().fullName }
        </UserGreeting>

        <Icons>
          {/* <IconButton onClick={() => setOpen(true)} size="large">
            <NotificationIcon />
          </IconButton>
          <IconButton size="large">
            <SettingsIconStyled />
          </IconButton> */}
          <AvatarStyled
            onClick={() => setOpen(true)}
            src={Avatar}
          />
        </Icons>
      </StyledToolbar>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
    </AppBar>
  );
};

export default Navbar;
