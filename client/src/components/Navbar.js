import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light mb-5">
            
            <span className="navbar-brand.mb-0.h1.mx-auto">
            <NavLink to="/">
                <img src={logo} width="80" height="30" className="d-inline-block align-top" alt="logo" />
            </NavLink>
           
            <NavLink to="/">WhatsInMyFridge</NavLink>

           
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