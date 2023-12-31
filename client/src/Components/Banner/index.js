import React from "react";
import "./style.css";
import Button from "../../Components/Button";
import { LuLogIn } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-heading">
        Say goodbye to memorizing passwords. Let us do it for you.&nbsp;
        <span>Lock. Sync. Secure.</span>
      </div>
      <div className="banner-tagline-container">
        <div className="banner-tagline">
          LockMaster is a secure password manager that safely manages your
          passwords and autofills them across websites and applications.
        </div>
        <div className="banner-links">
          <Button 
            icon={<LuLogIn />} 
            label="Login or Sign Up" 
            to="/register" 
          />
          <Button
            icon={<GrAppsRounded />}
            label="Explore about Creator"
            to="https://deepajha.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}
