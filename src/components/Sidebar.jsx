import React from "react";
import "./css/Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h1>This is Side Bar.</h1> */}

      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
      <h4 className="sidebar__heading">SUBSCRIPTIONS</h4>
      <SidebarRow Icon={AccountCircleIcon} title="Cleaver Programmer" />
      <SidebarRow Icon={AccountCircleIcon} title="Davie504" />
      <SidebarRow Icon={AccountCircleIcon} title="BB ki Vines" />
      <SidebarRow Icon={AccountCircleIcon} title="TED" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
      <h4 className="sidebar__heading">MORE FROM YOUTUBE</h4>
      <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
      <SidebarRow Icon={LocalMoviesIcon} title="Movies" />
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={LiveTvIcon} title="Live" />
      <SidebarRow Icon={FavoriteBorderIcon} title="Fashion and Beauty" />
      <SidebarRow Icon={EmojiObjectsIcon} title="Learning" />
      <hr />
      <SidebarRow Icon={SettingsIcon} title="Settings" />
      <SidebarRow Icon={FlagIcon} title="Report history" />
      <SidebarRow Icon={HelpIcon} title="Help" />
      <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
      <hr />
      <div className="copyright">
        <p>About Press Copyright Contact us Creators Advertise Developers</p>
        <br />
        <p>
          Terms Privacy Policy &amp; Safety How YouTube works Test new features
        </p>
        <br />
        <p>© 2020 by Google LLC</p>
      </div>
    </div>
  );
}

export default Sidebar;
