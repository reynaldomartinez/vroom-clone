import React from 'react';
import './Navbar.css';

import { IoNotifications } from 'react-icons/io5';
import { BiMenuAltLeft } from "react-icons/bi";

function Navbar() {
  return (
    <div className='nav-wrapper bg-zinc-100 '>
            <div className='nav mx-auto bg-white shadow-lg flex justify-between lg:py-8 md:px-16'>
                <a href="">vroom Clone</a>
                <div className='flex'>

                    {/* <ul className='flex menu-list'>
                        <li><a href="">BUY</a></li>
                        <li><a href="">SELL/TRADE</a></li>
                        <li><a href="">FINANCE</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">LOG IN</a></li>
                    </ul> */}

                    <IoNotifications id='ionNoti' /> 
                    <BiMenuAltLeft id='biMenu' />
                </div>
            </div>
    </div>
  )
}

export default Navbar