import React from 'react';
import Recipes from './Api/Recipes';
import Search from './Api/Search';

const Searchpage = () => {
    return (
        <React.Fragment>
             <div className="search-content container-fluid padding">
             <div className="col-12 ">
                <Search />
                <Recipes />
             </div>
            </div>
        </React.Fragment>
        
    )
}

export default Searchpage;