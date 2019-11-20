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

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        isAuthenticated && (
                            <span className="navbar-brand mb-0 ml-auto">
                                
                                <NavLink to="/user">Profile</NavLink>&nbsp;
                                {/* NEW - Add a link to the /external-api route */}
                                <NavLink to="/external-api">External API</NavLink>
                                <NavLink to="/searchpage">Recipes</NavLink>
                               
                            </span>
                        )
                    }
                </div>
               
                


                 {/* Login/SignUp Button */}
                
               
                    <div>
                        {!isAuthenticated && (
                            <button className="btn btn-sm btn-outline-warning "
                            onClick={() =>
                                loginWithRedirect({ 
                                    redirect_uri: 
                                       'http://localhost:3000/user'
                                       //'https://whatsinmyfridgeapp.herokuapp.com/'
                                })
                            }
                            >
                            Log in / Sign Up
                            </button>
                        )}

                        {isAuthenticated && <button className="btn btn-sm btn-outline-warning " onClick={() => 
                            logout({returnTo:
                                'http://localhost:3000'
                                //'https://whatsinmyfridgeapp.herokuapp.com/'
                            })}>
                                    Log out
                                </button>}

                        
                    </div>
             
            </div> 
        </nav>
    
    )
}

export default Navbar;