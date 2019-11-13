import React from 'react';
import '../App.css';
// import hpbanner2 from '../assets/hpbanner2.png';
// import hpbanner3 from '../assets/hpbanner3.png';
// import hpbanner4 from '../assets/hpbanner4.png';
// import hpbanner5 from '../assets/hpbanner5.png';
// import hpbanner6 from '../assets/hpbanner6.png';
// import hpbanner7 from '../assets/hpbanner7.png';
// import hpbanner8 from '../assets/hpbanner8.png';
// import hpbanner9 from '../assets/hpbanner9.png';

 let images = [
     "../assets/hpbanner2.png",
     "../assets/hpbanner3.png",
     "../assets/hpbanner4.png"
    ];

//  $('background-image:"url(' + images[Math.floor(Math.random() * images.length)] + '")>').appendTo('#jumbotron');
//let background = document.querySelector('.jumbotron').backgroundImage;
//document.getElementById('jumbotron').style.backgroundImage=`url(`+images[Math.floor(Math.random() * images.length)]+`)`; 
 
 const Hpbanner = () => {

    return (
    <div className='hp'>
        <div className='jumbotron' >
            <div className="banner-square">
                <h1 className="banner-phrase">Reduce Food Waste.</h1> <br/>
                <h5 className="banner-phrase2">Use What's In Your Fridge.</h5>
                {/* <img className='container' src={ hpbanner1 } width="100%" height="100%" margin="0" backgroundSize="cover" alt='homepage banner'/> */}
            </div>
        </div>
    </div>   
    )
}

export default Hpbanner;