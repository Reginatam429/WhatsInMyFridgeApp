import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpg = () => {
    return (
        <div className="sidebyside">
        <div className="center-error">
            <div>
            <h1 className="errorh1">Uh Oh!</h1>
            <p>
                <h5>Error 404: It seems your fridge cannot be found!</h5> 
                <br/>
                How about checking out these pages instead:
            </p>
            <p text-align="left">
                <NavLink to="/">Homepage</NavLink> <br/>
                <NavLink to="/searchpage">Recipe Search </NavLink> <br/>
                <NavLink to="/user">User Page</NavLink> <br/>
                <NavLink to="/private-policy">Private Policy</NavLink> <br/>
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