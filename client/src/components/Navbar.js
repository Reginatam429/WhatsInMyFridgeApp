import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            
           {/* logo */}
            <span className="navbar-brand.mb-0.h1.mx-auto">
            <NavLink to="/">
                <img src={logo} width="90" height="35" className="d-inline-block align-top" alt="logo" />
            </NavLink>

           {/* App Name */}
            <NavLink to="/"><span className="navbar-brand mb-0 h1">WhatsInMyFridge</span></NavLink>

           {/* Login/SignUp Button */}
            </span>
            <form className="form-inline">
            <NavLink to="/login">
                <button className="btn btn-sm btn-outline-success" type="button">
                    Login / Sign Up
                </button>
            </NavLink>
            </form>
        </nav>
    )
}

export default Navbar;