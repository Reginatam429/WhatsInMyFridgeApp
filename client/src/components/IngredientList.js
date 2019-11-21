import React from 'react';
import IngredientItem from './IngredientItem';



const IngredientList = ({ingredients}) => {
    
    //console.log(user);
    //console.log(ingredients[0]);

    const fridgeList = ingredients.map((ingredients) => {
        return <IngredientItem  key={ingredients.id} ingredients={ingredients} />;
      });

    return <div>{fridgeList}</div>
    
};


export default IngredientList;
