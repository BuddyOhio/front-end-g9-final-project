import { Box, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
// IMPORT COMPONENTS
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Drawer from "@mui/material/Drawer";
import NavMobile from "../feat-navMobile/NavMobile";
import NavActivity from "../feat-activity/NavActivity";

const NavbarDesktop = ({ children }) => {
  const leftDrawerWidth = 240;
  const rightDrawerWidth = 360;

  // Get the current location using useLocation hook
  const location = useLocation();
  // Check if the current route is AllActivity
  const isAllActivityRoute = location.pathname === "/all-activity";

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Drawer
          className="hidden md:block z-40"
          variant="permanent"
          sx={{
            width: leftDrawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: leftDrawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#ecfcff",
            },
          }}
        >
          <Toolbar />
          <Sidebar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Box bgcolor={"white"} flex={4} py={1} px={4} height="100vh">
            {children}
          </Box>
        </Box>
        {/* Display if not on path /all-activity */}
        {isAllActivityRoute ? null : (
          <Drawer
            className="hidden md:block z-40"
            variant="permanent"
            sx={{
              width: rightDrawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: rightDrawerWidth,
                boxSizing: "border-box",
              },
            }}
            anchor="right"
          >
            <Toolbar />
            <NavActivity />
          </Drawer>
        )}

        <NavMobile />
      </Box>
    </>
  );
};

export default NavbarDesktop;
