import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Feed from './Feed'
import { Box, Stack } from "@mui/material";

const NavbarDesktop = () => {
  return (
    <div>
       <Box>
    <Navbar />
    <Stack direction="row" spacing={0} justifyContent={"space-between"}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  </Box>
    </div>
  )
}

export default NavbarDesktop