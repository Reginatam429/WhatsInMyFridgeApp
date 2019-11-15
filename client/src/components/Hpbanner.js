import React from 'react';
import '../App.css';
import hpbanner2 from '../assets/hpbanner2.png';
import hpbanner3 from '../assets/hpbanner3.png';
import hpbanner4 from '../assets/hpbanner4.png';
import hpbanner5 from '../assets/hpbanner5.png';
import hpbanner6 from '../assets/hpbanner6.png';
import hpbanner7 from '../assets/hpbanner7.png';
import hpbanner8 from '../assets/hpbanner8.png';
import hpbanner9 from '../assets/hpbanner9.png';

 let images = [
    hpbanner2,
    hpbanner3,
    hpbanner4,
    hpbanner5,
    hpbanner6,
    hpbanner7,
    hpbanner8,
    hpbanner9
    ];

let phrases = [
    "REDUCE FOOD WASTE.",
    "CHECK YOUR FRIDGE.",
    "FEELING HUNGRY?",
    "LEARN TO COOK.",
    "SAVE MONEY.",
    "AVOID SPOILAGE",
    "WE DO HAVE FOOD AT HOME.",
    "FIND A NEW RECIPE"
]

 
 const Hpbanner = () => {

    const imageUrl = images[Math.floor(Math.random() * images.length)];

    const bannerMessage = phrases[Math.floor(Math.random() * phrases.length)];
    
    return (
    <div className='hp'>
        <div className='banner' style={{backgroundImage: `url(${imageUrl})` }} >
            <div className="banner-square">
                <h1 className="banner-phrase">{bannerMessage}</h1> <br/>
                <h5 className="banner-phrase2">Use What's In Your Fridge.</h5>
            </div>
        </div>
    </div>   
    )
}

export default Hpbanner;