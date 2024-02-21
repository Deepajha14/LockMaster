import React from 'react'
import "./style.css";
import { Link } from "react-router-dom";
import { RiLock2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { MdOutlineAdd } from "react-icons/md";

export default function sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='top-row'>
            <div className='icon-container'><FaBars className='icon'/></div>
            <div className='searchbox-container'>
                <input type='text' placeholder='Search LockMaster'/>
                <button className='icon-container'><LiaSearchSolid className='icon'/></button>
            </div>
        </div>
        <div className='menu-wrapper'>
            <section>
                <ul>
                    <li>
                        <div>
                            <Link to="#">
                                <RiLock2Line className='icon'/>
                                Passwords
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <RiLock2Line className='icon'/>
                                Secure Notes
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <div className='collection-heading'>
                    <h1>Collections</h1>
                    <button className='icon-container'><MdOutlineAdd className='icon'/></button>
                </div>
                <ul>
                    <li>
                        <div>
                            <Link to="#">
                                <div className='collection-point'></div>
                                Demo Collection 1
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <div className='collection-point'></div>
                                Demo Collection 2
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <div className='collection-point'></div>
                                Demo Collection 3
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <div className='collection-point'></div>
                                Demo Collection 4
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  )
}
