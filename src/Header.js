import React from "react";
import "./Styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Header_options from "./Header_options";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <Header_options Icon={HomeIcon} title="Home" />
        <Header_options Icon={SupervisorAccountIcon} title="My Network" />
        <Header_options Icon={BusinessCenterIcon} title="Jobs" />
        <Header_options Icon={ChatIcon} title="Messaging" />
        <Header_options Icon={NotificationsIcon} title="Notifications" />
        <Header_options
          avatar="https://devanshsk.netlify.app/images/profilepic.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
