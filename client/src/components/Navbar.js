import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from "../react-auth0-spa";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* logo */}
                <span className="navbar-brand.mb-0.h1.mx-auto">
                <NavLink to="/">
                    <img src={logo} width="90" height="35" className="d-inline-block align-top" alt="logo" />
                </NavLink>

                {/* App Name */}
                <NavLink to="/"><span className="navbar-brand mb-0 h1 ">WhatsInMyFridge</span></NavLink>
                </span>

                {/* link to the home and profile pages */}
                {isAuthenticated && (
                            
                    <NavLink to="/User">
                        <span className="navbar-brand mb-0 h1 ">
                            Profile
                        </span>
                    </NavLink>      
                            )}

                 {/* Login/SignUp Button */}
                
                <form className="form-inline">
                    <div>
                        {!isAuthenticated && (
                            <button className="btn btn-sm btn-outline-warning"
                            onClick={() =>
                                loginWithRedirect({ 
                                    //redirect_uri: 'http://localhost:3000'
                                })
                            }
                            >
                            Log in / Sign Up
                            </button>
                        )}

                        {isAuthenticated && <button className="btn btn-sm btn-outline-warning"onClick={() => 
                            logout({returnTo:'http://localhost:3000/'})}>Log out</button>}

                        
                    </div>
                </form>
            </div> 
        </nav>
    
    )
}

export default Navbar;