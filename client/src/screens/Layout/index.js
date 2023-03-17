import { Box, useMediaQuery } from '@mui/material';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from "state/api";

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const  userId = useSelector( (state)=> state.global.userId );
  console.log("🚀 ~ file: index.js:13 ~ Layout ~ userId:", userId)
  const data = useGetUserQuery(userId)
  console.log("🚀 ~ file: index.js:14 ~ Layout ~ data:", data);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
          drawerWidth="250px"
          isNonMobile={isNonMobile}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          />
        <Box flexGrow={1}>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            />
          <Outlet />
        </Box>
    </Box>
  );
}

export default Layout;
