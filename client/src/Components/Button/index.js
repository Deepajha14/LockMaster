import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Button(props) {
  return (
    <Link to={props.to} className="btn">
      <div className="btn-container">
        <div className="btn-icon">{props.icon}</div>
        <div className="btn-label">{props.label}</div>
      </div>
    </Link>
  );
}
