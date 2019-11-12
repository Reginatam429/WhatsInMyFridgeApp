import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpg = () => {
    return (
        <div className="sidebyside">
        <div className="center">
            <div>
            <h1 className="errorh1">Uh Oh!</h1>
            <p>
                <h5>Error 404: It seems your fridge cannot be found!</h5> 
                <br/>
                How about checking out these pages instead:
            </p>
            <p text-align="left">
                <NavLink to="/">Homepage</NavLink> <br/>
                Recipe Search <br/>
                <NavLink to="/user">User Page</NavLink> <br/>
                <NavLink to="/about">About Us</NavLink> <br/>
<<<<<<< HEAD
                <NavLink to="/private-policy">Private Policy</NavLink> <br/>
=======
>>>>>>> 246a92cba6f0f83fd95b9863b4ad23d799703e63
            </p>
            </div>
        </div>
        <div className="centerpic">
        <img src='https://media.giphy.com/media/1Ztlc32LSJj5GPWPZs/giphy.gif' alt="Error404" />
        </div>
      </div>
        
    )
}

export default Errorpg;