
import React from 'react';


const IngredientItem = ({ ingredient }) => {
  return(
   
      <div className='card border-warning mb-3 text-center w-75'>
        <div className='Card-body'> 
        <h4 className="card-title">{ingredient.ingredient_name}</h4>  
          <p className="card-text">Category: {ingredient.category}</p>
          <p className="card-text">Amount: {ingredient.amount}</p>
          <a href="#" className="card-link">Remove Item</a>
        </div>
      </div>
    
  );
};

export default IngredientItem;