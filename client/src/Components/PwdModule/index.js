import React from 'react'
import "./style.css"
import PwdCard from '../PwdCard'
import { FiMoreVertical } from "react-icons/fi";

export default function PwdModule() {
  return (
    <div className='module'>
        <div className='card-container'>
            <PwdCard/>
            <PwdCard/>
            <PwdCard/>
            <PwdCard/>
            <PwdCard/>
        </div>
        <div className='module-banner'>
            <div className='module-name'>New Folder</div>
            <div className='module-options'><FiMoreVertical /></div>
        </div>
    </div>
  )
}
