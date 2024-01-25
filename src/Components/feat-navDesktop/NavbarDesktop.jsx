import React from "react";
import { Box, Stack } from "@mui/material";

// IMPORT COMPONENTS
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavMobile from "../NavMobile";
import NavActivity from "../feat-activity/NavActivity";

const NavbarDesktop = ({ children }) => {
  return (
    <div>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={0} justifyContent={"space-between"}>
          <Sidebar />

          {/* Feed */}
          <Box bgcolor={"white"} flex={4} p={2} height="100vh">
            {children}
          </Box>

          {/* Rightbar */}
          <Box
            // bgcolor={"lightcoral"}
            flex={2}
            p={2}
            // sx={{ display: { xs: "none", sm: "block" }  }}
            height="100vh"
            className="hidden md:flex justify-center"
          >
            <NavActivity />
          </Box>
        </Stack>
      </Box>

      <NavMobile />
    </div>
  );
};

export default NavbarDesktop;
