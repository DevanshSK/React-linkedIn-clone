import { Avatar } from "@mui/material";
import React from "react";
import "./Styles/Header_options.css";

function Header_options({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          sx={{ width: "23px", height: "23px" }}
          className="headerOptions__icon "
          src={avatar}
        />
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default Header_options;
