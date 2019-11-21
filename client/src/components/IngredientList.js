import React from 'react';
import IngredientItem from './IngredientItem';



const IngredientList = ({ingredients}) => {
    
    //console.log(user);
    //console.log(ingredients[0]);

    const fridgeList = ingredients.map((ingredient) => {
        return <IngredientItem  key={ingredient.id} ingredient={ingredient} />;
      });

    return <div>{fridgeList}</div>
    
};


export default IngredientList;
