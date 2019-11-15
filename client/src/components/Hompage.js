import React from 'react';
import '../App.css';
import Hpbanner from '../components/Hpbanner';

 const Homepage = () => {
    
    return (
    <div>
        <Hpbanner/>
       
       <div className="container-fluid padding">
           <div className="row aboutUs text-center">
            <div className="col-12">

             <h1 className="display-4">About Us</h1>
             
            </div>
            <div className="col-12">
                <p className="lead">This site will help you save money and prevent food waste. yay!</p>
            </div>
             
           </div>
          
       </div>
       
    </div>   
    )
}

export default Homepage;