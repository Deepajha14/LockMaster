import React, { useState } from "react";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle, FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPowerOff, FaStar, FaRegStar, FaGithub } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import NavTabs from "../NavTabs";

export default function Navbar() {
  const [clickedState, setClickState] = useState(false);
  var showMenu = () => {
    var menuList = document.getElementsByClassName("nav-item-list");
    menuList[0].classList.toggle("show-nav-item-list");
    setClickState(!clickedState);
  };
  // const value = 'Star repo on ' + <FaGithub />;
  // const content = "star repo on" +  <FaGithub/>;
  // const content = {
  //   text: "star repo on",
  //   icon: <FaGithub/>,
  // };

  return (
    <div className="nav-container">
      {/* <div className="lockmaster-logo-container">LockMaster</div> */}
      <NavTabs
        class="user-info"
        id="user-info"
        logo={<FaUserCircle />}
        value="John Doe"
      />
      <div onClick={showMenu}>
        {clickedState ? (
          <NavTabs 
            class="hamburger" 
            id="hamburger" 
            logo={<ImCross />} 
          />
        ) : (
          <NavTabs 
            class="hamburger" 
            id="hamburger" 
            logo={<FaEquals />} 
          />
        )}
      </div>
      <div className="nav-item-list">
        <NavTabs
          class="search-box"
          id="search-box"
          logo={<BsSearch />}
          value={<input placeholder="LockMaster" />}
        />
        <NavTabs
          class="star-repo nav-item"
          id="star-repo"
          logo={
            clickedState ? (
              <FaStar className="star-repo-icon" />
            ) : (
              <FaRegStar className="star-repo-icon" />
            )
          }
          value="Star Repo on "
          onClick={() => {
            setClickState(!clickedState);
          }}
        />
        {/* <NavTabs
          class="login-signup nav-item"
          id="login-signup"
          logo={<LuLogIn />}
          value="Login or Sign Up"
        /> */}
        <NavTabs
          class="logout nav-item"
          id="logout"
          logo={<FaPowerOff />}
          value="Logout"
        />
      </div>
    </div>
  );
}
