import React from 'react'

 const Recipe = (props) => {
    const { recipe } = props;
    return (
        <div className='col-md-4'>
            <div className='card'>

            {/* Card image */}
            <img className="card-img-top" src={recipe.image} alt="Recipe Image" />

            {/* Card content */}
            <div className="card-body">

            {/* Title */}
            <h4 className="card-title"><a>{recipe.label}</a></h4>
             {/* Text */}
            <p className="card-text">Number of Calories:{recipe.calories}KCal</p>
            {/* Button */}
            <a href="#" className="btn btn-primary">Button</a>

            </div>
            </div>

        </div>
    )
}

export default Recipe;
