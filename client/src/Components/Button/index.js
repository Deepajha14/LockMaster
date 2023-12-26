import React from 'react'
import './style.css'

export default function Button(props) {
  return (
    <button className="btn">
      <div className="btn-container">
        <div className="btn-icon">{props.icon}</div>
        <div className="btn-label">{props.label}</div>
      </div> 
    </button>
  )
}
