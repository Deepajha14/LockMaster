import React from 'react'
import { Link } from "react-router-dom";
import { RiLock2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

export default function sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='top-row'>
            <div><FaBars /></div>
            <div>
                <input type='text'/>
                <button><IoSearchOutline /></button>
            </div>
        </div>
        <div className='menu-wrapper'>
            <section>
                <ul>
                    <li>
                        <div>
                            <Link to="#">
                                <RiLock2Line />
                                Passwords
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <RiLock2Line />
                                Passwords
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="#">
                                <RiLock2Line />
                                Passwords
                            </Link>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Collections</h1>
                <ul>
                    <li>
                        <div><Link to="#">Demo Collection</Link></div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  )
}
