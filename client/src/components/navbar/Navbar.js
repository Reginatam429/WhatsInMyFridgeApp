import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light mb-5">
            
            <span className="navbar-brand.mb-0.h1.mx-auto">
            <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo" />
           
            What'sInMyFridge

           
            </span>
            <form class="form-inline">
                <button class="btn btn-sm btn-outline-success" type="button">Login / Sign Up</button>
            </form>
        </nav>
    )
}

export default Navbar;