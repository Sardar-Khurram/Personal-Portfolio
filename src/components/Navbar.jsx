import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 bg-gray-800 backdrop-blur-3xl">
            <div className="logo">Sardar Khurram</div>
            <div className="links">
                <NavLink className={(e)=>{return e.isActive?'navStyle':''}} to='/'>Home</NavLink>
                <NavLink className={(e)=>{return e.isActive?'navStyle':''}} to='/about'>About</NavLink>
                <NavLink className={(e)=>{return e.isActive?'navStyle':''}} to='/contact'>Contact</NavLink>
                <NavLink className={(e)=>{return e.isActive?'navStyle':''}} to='/skills'>Skills</NavLink>
                <NavLink className={(e)=>{return e.isActive?'navStyle':''}} to='/projects'>Projects</NavLink>
            </div>
        </nav>
    )
}

export default Navbar