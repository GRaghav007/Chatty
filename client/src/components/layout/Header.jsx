import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import('../specific/Search.jsx'));
const NotificationDialog = lazy(() => import('../specific/Notifications.jsx'));
const NewGroupDialog = lazy(() => import('../specific/NewGroups.jsx'));


const Header = () => {

  const navigate = useNavigate();
  const[isMobile, setIsMobile] = useState(false)
  const[isSearch, setisSearch] = useState(false)
  const[isNewGroup, setisNewGroup] = useState(false)
  const[isNotification, setisNotification] = useState(false)

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };


  const openSearchDialog = () => {
    setisSearch(!isSearch)
  };


  const openNewGroup = () => {
    setisNewGroup(!isNewGroup)
  };

  const openNotification = () => {
    setisNotification(!isNotification)
  };

  const LogOutHandler = () => {
    console.log("Logout");
  };


  const NavigateToGroup = () => navigate("/groups")


  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chatty
            </Typography>

            {/* To show menu icon when the window turns small */}
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box>
                
              <IconBtn title={"Search"} icon={<SearchIcon/>} onClick={openSearchDialog}/>
              <IconBtn title={"New Group"} icon={<AddIcon/>} onClick={openNewGroup}/>
              <IconBtn title={"Manage Groups"} icon={<GroupIcon/>} onClick={NavigateToGroup}/>
              <IconBtn title={"Notifications"} icon={<NotificationsIcon/>} onClick={openNotification}/>
              <IconBtn title={"Logout"} icon={<LogoutIcon/>} onClick={LogOutHandler}/>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* To open search dialog when clicked */}
      {isSearch && (
        // Backdrop is used to show Loading before the page is actually laoded
        <Suspense fallback= {<Backdrop open />}>
          <SearchDialog/>
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback= {<Backdrop open />}>
          <NotificationDialog/>
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback= {<Backdrop open />}>
          <NewGroupDialog/>
        </Suspense>
      )}


    </>
  );
};


// Making a component for icon buttons,
const IconBtn = ({title, icon, onClick}) => {
  return (
    //  Tooltip used to show the title when hovered on the Icon 
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header;
