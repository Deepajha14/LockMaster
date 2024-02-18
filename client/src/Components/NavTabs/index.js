import React from "react";
import './style.css';

export default function NavTabs(tab) {
  return (
  <div className={`${tab.class} outer-dark-cover`} id={tab.id}>
    <div className="tab-container">
      <div className="tab-logo">{tab.logo}</div>
      <div className="tab-value">{tab.value}</div>      
    </div>
  </div>
  );
}
