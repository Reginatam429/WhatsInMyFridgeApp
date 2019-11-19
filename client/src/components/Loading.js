import React from 'react';
import Spinner from '../assets/loadingGif.gif';

export default () => {
   return (
    <div>
      <img
        src={Spinner}
        alt="Fridge is Loading..."
        style={{ width: '200px', margin: '40px auto', display:'block'}}
       />
    </div>
   );
};

