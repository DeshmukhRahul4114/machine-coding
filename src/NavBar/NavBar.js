import React, { useState } from 'react';
import './NavBar.css'

const NavBar = () => {
    const [isOpen,setIsOpen]=useState(false);

    const onHandle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div className='nav-container'>
            {!isOpen &&<div className ='toggle' onClick={onHandle}>{"Open"}</div>}
            <div className={`nav-item${isOpen ? 'open':''}`}>
                {isOpen &&<div onClick={onHandle}>'X'</div>}
               <a href='home'>{"Home"}</a>
               <a href='products'>{"Products"}</a>
               <a href='service'>{"Service"}</a>
            </div>
        </div>
    );
};

export default NavBar;