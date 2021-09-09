import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import { useDispatch } from "react-redux";
import {logout} from '../features/userSlice'
import { auth } from "../firebase/firebase";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = ()=>{
      dispatch(logout());
      auth.signOut();
  }
  return (
    <div className="header">
      
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
          alt=""
        />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Chats"/>
          <HeaderOption Icon={NotificationIcon} title="Notification"/>
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQEouE5lUjJGSw/profile-displayphoto-shrink_100_100/0/1624488048098?e=1635984000&v=beta&t=scfafEr3aryQQ4N5g59SllbH9lgQC2jjH-gBbe1JSsM" title="Me" onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
