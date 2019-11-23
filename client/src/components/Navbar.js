import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from "../react-auth0-spa";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        
        // <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">

        //         {/* logo */}
                

        //         <NavLink to="/">
        //             <img src={logo} width="90" height="35" className="d-inline-block align-top" alt="logo" />
        //         </NavLink>

        //         {/* App Name */}
        //         <a class="navbar-brand" href="#">WhatsInMyFridge</a>
                
                

        //         {/* link to the home and profile pages */}

        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        // </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             {
        //                 isAuthenticated && (
                           
        //                    <span className="navbar-brand  ml-auto style-color:#fb3f00 text-decoration:none">
    
        //                      <NavLink to="/user">My Fridge</NavLink>&nbsp;
        //                      <NavLink to="/searchpage">Recipes</NavLink>
                           
        //                    </span>
                           
        //                 )
        //             }
        //         </div>
        //          {/* Login/SignUp Button */}
                
               
        //             <div>
        //                 {!isAuthenticated && (
        //                     <button className="btn btn-sm btn-outline-warning "
        //                     onClick={() =>
        //                         loginWithRedirect({ 
        //                             redirect_uri: 
        //                               'http://localhost:3000/user'
        //                               //'https://whatsinmyfridgeapp.herokuapp.com/'
        //                         })
        //                     }
        //                     >
        //                     Log in / Sign Up
        //                     </button>
        //                 )}

        //                 {isAuthenticated && <button className="btn btn-sm btn-outline-warning " onClick={() => 
        //                     logout({returnTo:
        //                         'http://localhost:3000'
        //                         //'https://whatsinmyfridgeapp.herokuapp.com/'
        //                     })}>
        //                             Log out
        //                         </button>}

                        
        //             </div>
             
            
        // </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/">
                   <img src={logo} width="90" height="35" className="d-inline-block align-top" alt="logo" />
          </NavLink>

          <NavLink to="/"><a class="navbar-brand" href="#">WhatsInMyFridge</a></NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

           
            
            {
                        isAuthenticated && (
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                           
    
                                <NavLink to="/user">
                                <a class="navbar-brand" href="#">
                                    My Fridge
                                    </a>
                                </NavLink>
                             </li>
                             <li className="nav-item active">
                             <NavLink to="/searchpage">
                             <a class="navbar-brand" href="#">
                                 Search Recipes
                                 </a></NavLink>
                             </li> 
                           </ul>
                           
                        )
                    }

            {!isAuthenticated && (
               <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
                            </ul> 
                        )}
                        
                        {isAuthenticated && <button className="btn btn-sm btn-outline-warning " onClick={() => 
                            logout({returnTo:
                                'http://localhost:3000'
                                //'https://whatsinmyfridgeapp.herokuapp.com/'
                            })}>
                                    Log out
                                </button>}
        </div>
</nav>
    
    )
}

export default Navbar;