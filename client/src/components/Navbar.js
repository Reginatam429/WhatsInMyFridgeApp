import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from "../react-auth0-spa";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">

                {/* logo */}
                <span className="navbar-brand.mb-0.h1.mx-auto">
                <NavLink to="/">
                    <img src={logo} width="90" height="35" className="d-inline-block align-top" alt="logo" />
                </NavLink>

                {/* App Name */}
                <NavLink to="/"><span className="navbar-brand mb-0 h1 ">WhatsInMyFridge</span></NavLink>
                </span>

                {/* link to the home and profile pages */}

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    </ul>
                </div>
               
                {
                    isAuthenticated && (
                        <span className="navbar-brand mb-0">
                        <NavLink to="/user">Profile</NavLink>&nbsp;
                        {/* NEW - Add a link to the /external-api route */}
                        <NavLink to="/external-api">External API</NavLink>
                        </span>
                    )
                }


                 {/* Login/SignUp Button */}
                
               
                    <div>
                        {!isAuthenticated && (
                            <button className="btn btn-sm btn-outline-warning"
                            onClick={() =>
                                loginWithRedirect({ 
                                    redirect_uri: 'http://localhost:3000'
                                })
                            }
                            >
                            Log in / Sign Up
                            </button>
                        )}

                        {isAuthenticated && <button className="btn btn-sm btn-outline-warning" onClick={() => 
                            logout({returnTo:'http://localhost:3000'})}>Log out</button>}

                        
                    </div>
             
            </div> 
        </nav>
    
    )
}

export default Navbar;