import React, { useState, useEffect, useRef } from 'react';
import './style.css';

import { IoIosLock } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function AddPassword() {
  const [showPwd, setShowPwd] = useState(false);

  let panelRef = useRef();
  const navigate = useNavigate();
  useEffect (() => {
    let handler = (e) => {
      if (!panelRef.current.contains(e.target)) {
        navigate(-1);
        console.log(panelRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <>
    <div className='add-password-bg'>
      <div className='add-password-panel' ref={panelRef}>
        <div className='addPwd-top'>
          <div className='big-lock-container'><IoIosLock className='big-lock'/></div>
          <div>Add a Password</div>
        </div>
        <form>

          <section className='login-details'>
            <h1>Login Details</h1>
            <label>WEBSITE</label>
            <input type="url" placeholder="Add URL" className="input-container"/>
            <label>USERNAME</label>
            <input type="text" placeholder="Add Username" className="input-container"/>
            <label>ALTERNATE USERNAME</label>
            <input type="text" placeholder="Add an Alternate Username" className="input-container"/>
            <label>PASSWORD</label>
            <div className="input-container">
              <input type={showPwd ? "text" : "password"} placeholder="Add Password" style={{margin: "0"}}/>
              <div onClick={() => {setShowPwd(!showPwd)}}>{showPwd ? <FaRegEye /> : <FaRegEyeSlash/>}</div>
            </div>
            <label>ADD A NOTE</label>
            <textarea placeholder="Add a Note" rows={3} className="input-container"/>
          </section>

          <section className='add-collections'>
            <h1>Collections</h1>
            <input type="text" placeholder="Search or Add a new Collection" className="input-container"/>
            <button className='collection-btn'>
              <div><MdOutlineAdd className='icon'/></div>
              <div>Add a Collection</div>
            </button>
          </section>

          <section className='buttons'>
              <button type='submit' style={{background: "rgb(0, 139, 109)"}}>Save</button>
              <button type='cancel'>Cancel</button>
          </section>

        </form>
      </div>
    </div>
    </>
  );
}