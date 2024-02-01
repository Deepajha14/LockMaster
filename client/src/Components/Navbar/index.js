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
  const [loggedInState, setLogInState] = useState(false);
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
      {loggedInState ? (
        <NavTabs
          class="user-info"
          id="user-info"
          logo={<FaUserCircle />}
          value="John Doe"
        />
      ) : (
        <div className="lockmaster-logo-container">LockMaster</div>
      )}

      <div onClick={showMenu}>
        {clickedState ? (
          <NavTabs class="hamburger" id="hamburger" logo={<ImCross />} />
        ) : (
          <NavTabs class="hamburger" id="hamburger" logo={<FaEquals />} />
        )}
      </div>

      <div className="nav-item-list">
        {loggedInState ? (
          <NavTabs
            class="search-box"
            id="search-box"
            logo={<BsSearch />}
            value={<input placeholder="LockMaster" />}
          />
        ) : (
          <div></div>
        )}

        <div
          className="nav-item"
          onClick={() => {
            setClickState(!clickedState);
          }}
        >
          <NavTabs
            class="star-repo"
            id="star-repo"
            logo={
              clickedState ? (
                <FaStar className="star-repo-icon" />
              ) : (
                <FaRegStar className="star-repo-icon" />
              )
            }
            value={`Star repo on ${(<FaGithub />)}`}
          />
        </div>

        <div
          className="nav-item"
          onClick={() => {
            setLogInState(!loggedInState);
          }}
        >
          {loggedInState ? (
            <NavTabs
              class="logout"
              id="logout"
              logo={<FaPowerOff />}
              value="Logout"
            />
          ) : (
            <NavTabs
              class="login-signup"
              id="login-signup"
              logo={<LuLogIn />}
              value="Login or Sign Up"
            />
          )}
        </div>
      </div>
    </div>
  );
}
