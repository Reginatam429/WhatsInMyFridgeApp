
import React from 'react';


const IngredientItem = ({ ingredients }) => {
  return(
   
      <div className='card border-warning mb-3 text-center w-50'>
        <div className="card-header text-secondary">
            <h6><i className="fa fa-apple-alt"></i> Fridge Item</h6>
          </div>
        <div className='Card-body'> 
        <h4 className="card-title">{ingredients.ingredient_name}</h4>  
          <p className="card-subtitle mb-2 text-muted">Category: {ingredients.category}</p>
          <p className="card-text">Amount: {ingredients.amount}</p>
          <a href="#" className="card-link">Remove Item</a>
        </div>
      </div>
    
  );
};

export default IngredientItem;