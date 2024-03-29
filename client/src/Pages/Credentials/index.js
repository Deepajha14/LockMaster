import React, { useState } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdOutlineAdd } from "react-icons/md";
// import AddPassword from '../AddPassword';

export default function Credentials() {

  return (
    <>
    <div className='credentials-page'>
      <section>
        <Link to = '/user/credentials/add' className='add-new'>
        {/* <div className='add-new'> */}
          <button className='icon-container'><MdOutlineAdd className='icon'/></button>
          <div>Add New</div>
          {/* </div> */}
        </Link>
        <div className='my-account'>My Account <FaChevronDown /></div>
      </section>
      <table>
        <tr>
          <th></th>
          <th>ITEM NAME</th>
          <th>LAST USED</th>
          <th>COLLECTIONS</th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td>item_name</td>
          <td>02-03-24</td>
          <td>demo_collection</td>
          <td><div><TfiMoreAlt /></div></td>
        </tr>
      </table>
    </div>
    {/* {
      addPwdDisplay ? <AddPassword ref={ref}/> : <div></div>
    } */}
    </>
  );
}
