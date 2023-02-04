import React from 'react'
import logo from '../images/world-logo.JPG'


export default function Navbar(){
    return (
        <nav className='nav-bar'>
            <img src={logo} alt='' className='nav-logo'/>
            <h3>my travel journal</h3>
        </nav>
    )
}