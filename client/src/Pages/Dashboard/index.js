import React from "react";
import "./style.css";
import PwdModule from "../../Components/PwdModule";
import { FiPlusCircle } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="dashboard-bg">
      <PwdModule/>
      <PwdModule/>
      <PwdModule/>
      <PwdModule/>
      <PwdModule/>
      <div className="new-module">
        <div className="plus-icon"><FiPlusCircle /></div>
        <div className="new-folder">New Folder</div>
      </div>
    </div>
  );
}
