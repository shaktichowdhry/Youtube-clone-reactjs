// es7 snippets
import React, { useState } from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeLogo from "../assets/YouTube-Logo_Dark.svg";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
// not from icons but core
import Avatar from "@material-ui/core/Avatar";
import UserAvatar from "../assets/user-avatar.png";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      {/* Items on the left */}
      <div className="header__left">
        {/* Burger menu */}
        <MenuIcon className="header__menuIcon" />
        {/* Logo */}
        <Link to="/">
          <div className="logo-content">
            <img
              className="header__logo"
              src={YouTubeLogo}
              alt="YouTube-logo"
            />
            <spam className="country-code">IN</spam>
          </div>
        </Link>
      </div>

      {/* Items in the center */}
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      {/* Items on the left */}
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        {/* <AccountCircleIcon/> */}
        <Avatar
          className="header__icon"
          alt="Shakti Chowdhry"
          src={UserAvatar}
        />
      </div>
    </div>
  );
}

export default Header;
