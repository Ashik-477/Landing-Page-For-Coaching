import React from 'react'
import "./Navbar.css"
function Navbar() {
    return ( 
       <div className='navbar'>
        <h1>Happy Coaching</h1>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Extra salespage</li>
            <li><button className='button'>Get your free guid now</button></li>
        </ul>
       </div>
     );
}

export default Navbar;