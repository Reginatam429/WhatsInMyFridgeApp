import React from 'react';
import '../App.css';
import hpbanner1 from '../assets/hpbanner1.png';


const divStyle = {
    width: '100%',
    height: '500px',
    backgroundImage: `url(${hpbanner1})`,
    backgroundSize: 'cover'
  };

 const Homepage = () => {
    
    return (
    <div className='hp'>
        <div style={divStyle}>
            {/* <img className='hpbanner' src={ hpbanner } width="100%" height="100%" margin="0" alt='homepage banner'/> */}
        </div>
       <div>
           <h1>This is my homepage</h1>
       </div>
    </div>   
    )
}

export default Homepage;