
import React from 'react';
import axios from 'axios';


const IngredientItem = ({ ingredients }) => {

  const removeItem =(event) => {
    event.preventDefault();
    axios.delete(`https://whats-in-my-fridge-api.herokuapp.com/users/${ingredients.user_id}/ingredients/${ingredients.id}`)
    .then(res => {
      alert('Ingredient Removed!');
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });

  };
  
  return(
   
      <div className='card border-warning mb-3 text-center card-block '>
        <div className="card-header text-secondary ">
            <h6><i className="fa fa-apple-alt"></i> Fridge Item</h6>
          </div>
        <div className='Card-body'> 
        <h4 className="card-title">{ingredients.ingredient_name}</h4>  
          <p className="card-subtitle mb-2 text-muted">Category: {ingredients.category}</p>
          <p className="card-text">Amount: {ingredients.amount}</p>
          <button onClick={removeItem} className="card-link">Remove Item</button>
        </div>
      </div>
    
  );
};

export default IngredientItem;