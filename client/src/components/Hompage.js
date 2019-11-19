import React from 'react';
import '../App.css';
import Hpbanner from '../components/Hpbanner';


 const Homepage = () => {
    
    return (
    <div>
        <Hpbanner/>
       <br/>
       <div className="container-fluid padding">

           <div className="row aboutUs text-center">
            <div className="col-12">
                <i class="fas fa-seedling fa-3x"></i>
                <h1 className="display-4">About Us</h1>
             <hr width="50%"/>
            </div>

            <div className="col-12">
                <p className="lead">This site will help you save money and prevent food waste. yay!</p>
                <p className="lead">Here at What's In Your Fridge, we care about food waste. Did you know that roughly one third of the food produced in the world for human consumption every year – approximately 1,3 billion tonnes – gets lost or wasted.</p>
            </div>
             
           </div>
       </div>
    </div>   
    )
}

export default Homepage;