import React from 'react'
import './style.css'
import { FaChevronDown } from "react-icons/fa";

export default function Landing() {
  return (
    <div className='landing-window'>
        <div className='landing-bg-content'>
            <h1 className='landing-heading'>LOCKMASTER</h1>
            <h2 className='landing-desc'>Say goodbye to memorizing passwords. Let us do it for you. LockMaster is a secure password manager that safely manages your passwords and autofills them across websites and applications.</h2>
            <h2 className='landing-tagline'>Lock.Sync.Secure</h2>
            <div className='scroll-down-btn'><FaChevronDown /></div>
        </div>
    </div>
  )
}
