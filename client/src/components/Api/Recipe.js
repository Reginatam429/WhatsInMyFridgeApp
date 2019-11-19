import React from 'react';

 const Recipe = (props) => {
    const { recipe } = props;
    return (
       
        <div className='col-md-3'>
            <div className='card h-100 d-flex align-items-stretch'>

            {/* Card image */}
            <img className="card-img-top" src={recipe.image} alt="Recipe Image" />

            {/* Card content */}
            <div className="card-body text-center">

            {/* Title */}
            <h4 className="card-title"><a>{recipe.label}</a></h4>
            <hr/>
             {/* Text */}
            <p className="card-text">Calories: {(recipe.calories.toFixed(1))} KCal</p>
            <p className="card-text">Ingredients: {(recipe.ingredients.length)} total</p>
            {/* Button */}
            <a href={`${recipe.url}`} className="btn btn-warning btn-rounded">See More</a>

            </div>
            </div>

        </div>
    )
}

export default Recipe;
