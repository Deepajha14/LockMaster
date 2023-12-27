import React, { useState } from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle, FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPowerOff, FaStar, FaRegStar, FaGithub } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";

export default function Navbar() {
  const [clickedState, setClickState] = useState(false);
  var showMenu = () => {
    var menuList = document.getElementsByClassName("nav-item-list");
    menuList[0].classList.toggle("show-nav-item-list");
    setClickState(!clickedState);
  };

  return (
    <div className="nav-container">
      <div className="lockmaster-logo-container">LockMaster</div>
      <div className="user-info-container">
        <div className="user-profile-img-container">
          <FaUserCircle className="user-profile-icon" />
        </div>
        <div className="user-name">John Doe</div>
      </div>
      <div className="search-box-container">
        <BsSearch className="search-icon" />
        <input className="search-box-input" placeholder="LockMaster"></input>
      </div>
      <div className="hamburger-container" onClick={showMenu}>
        {clickedState ? (
          <ImCross className="ham-bar" />
        ) : (
          <FaEquals className="ham-bar" />
        )}
      </div>
      <div className="nav-item-list">
        <div
          className="github-star-repo-container nav-item"
          onClick={() => {
            setClickState(!clickedState);
          }}
        >
          {clickedState ? (
            <FaStar className="star-repo-icon" />
          ) : (
            <FaRegStar className="star-repo-icon" />
          )}
          <div className="star-repo">Star Repository on </div>
          <FaGithub className="github-icon" />
        </div>
        <div className="login-sign-up-container nav-item">
          <LuLogIn className="login-sign-up-icon" />
          <div className="login-sign-up">Login or Sign Up</div>
        </div>
        <div className="logout-container nav-item">
          <FaPowerOff className="logout-icon" />
          <div className="logout">Logout</div>
        </div>
      </div>
    </div>
  );
}
