import React from 'react';
import Recipes from './Api/Recipes';

const Searchpage = () => {
    return (
        <React.Fragment>
             <div className="container-fluid padding">
            <Recipes />
            </div>
        </React.Fragment>
        
    )
}

export default Searchpage;