import React from 'react';
import './Navbar.css';

import { IoNotifications } from 'react-icons/io5';
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-wrapper bg-zinc-100 sticky top-0'>
            <div className='nav mx-auto bg-white shadow-lg flex justify-between lg:py-8 md:px-16'>
                <Link to={'/'}>vroom Clone</Link>
                <div className='flex'>

                    {/* <ul className='flex menu-list'>
                        <li><a href="">BUY</a></li>
                        <li><a href="">SELL/TRADE</a></li>
                        <li><a href="">FINANCE</a></li>
                        <li><a href="">CONTACT</a></li>
                        <li><a href="">LOG IN</a></li>
                    </ul> */}
                    <div className='links mr-10'>
                      <Link to={'cars'}> BUY </Link>
                    </div>

                    <IoNotifications id='ionNoti' /> 
                    <BiMenuAltLeft id='biMenu' />
                </div>
            </div>
    </div>
  )
}

export default Navbar