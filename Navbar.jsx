import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./navbar.css"
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  const[open, setOpen] = useState(false);
  const [openCenter, setOpenCenter] = useState("center close")
  const [openRight, setOpenRight] = useState("right close"); 
  const[bar1, setBar1] = useState("bar1");
  const[bar2, setBar2] = useState("bar2");
  const[bar3, setBar3] = useState("bar3");


  useEffect(() => {
      if(open) {
          setOpenCenter("center")
          setOpenRight("right")
          setBar1("change bar1")
          setBar2("change bar2")
          setBar3("change bar3")
      } else {
          setOpenCenter("center close")
          setOpenRight("right close")
          setBar1("bar1")
          setBar2("bar2")
          setBar3("bar3")
      }
  },[open])
  return (
    <div className='container'>
        <div className='left'>
            <h1>Logo</h1>
        </div>
        <div className={openCenter}>
            <ul>
                  <li>
                <Link to="/" className='link'>
                      Home
                </Link>
                  </li>
                <Link to="/about" className='link'>
                <li>About</li>
                </Link>
                <Link to="/Product" className='link'>
                <li>Product</li>
                </Link>
                <li>Contact</li>
                <Link to="/Upcoming" className='link'>
                <li>Upcoming</li>
                </Link>
            </ul>
        </div>
        <div className={openRight}>
            <ul>
                <li>Sign in</li>
                <li>Sign up</li>
            </ul>
        </div>
        <div className='hamburger' onClick={() => setOpen(!open)}>
            <div className={bar1}></div>
            <div className={bar2}></div>
            <div className={bar3}></div>
        </div>
    </div>
  );
};

export default Navbar;
