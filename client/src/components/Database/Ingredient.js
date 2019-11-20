import React from 'react';

 const Ingredient = (props) => {
    const { ingredient } = props;
    return (
       
        <div className='col-md-3'>
            
            <div className="card">
                <div className="card-body">
                    testing
                    {ingredient}
                </div>
            </div>

        </div>
    )
}

export default Ingredient;
