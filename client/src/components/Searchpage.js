import React from 'react';
import Recipes from './Api/Recipes';
import Search from './Api/Search';

const Searchpage = () => {
    return (
        <React.Fragment>
             <div className="container-fluid padding">
                <Search />
                <Recipes />
            </div>
        </React.Fragment>
        
    )
}

export default Searchpage;