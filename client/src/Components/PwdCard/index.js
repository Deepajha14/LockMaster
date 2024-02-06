import React, { useState } from 'react'
import "./style.css"
import { RiEyeLine } from "react-icons/ri";
import { RiEyeCloseLine } from "react-icons/ri";
import { LuClipboardCopy } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function PwdCard() {
    const [showPwd, setShowPwd] = useState(false);
  return (
    <div className='card-box'>
        <div className='card-options'>
            <div onClick={()=>{setShowPwd(!showPwd)}}>{showPwd? <RiEyeLine /> : <RiEyeCloseLine />}</div>
            <div><LuClipboardCopy /></div>
            <div><MdDeleteForever /></div>
            <div><FaRegEdit /></div>
        </div>
        <form className='pwd-card-form'>
            <input 
                className='pwd-card-input platform'
                name = "platform"
                placeholder='Platform'
                type='name'
            />
            <input 
                className='pwd-card-input email'
                name = "email"
                placeholder='Email'
                type='email'
            />
            <input 
                className='pwd-card-input password'
                name = "password"
                placeholder='Password'
                type='password'
            />
        </form>
    </div>
  )
}
