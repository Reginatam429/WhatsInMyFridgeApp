import React, {Component} from 'react';
import { Consumer } from '../../Context';
import Spinner from '../Loading'
import Recipe from './Recipe'

class Recipes extends Component {
    render () {

    return (
        <Consumer>
            {value => {
               const { recipes_list, heading } = value;
               console.log(value);

               if(recipes_list === undefined || recipes_list.length === 0) {
                    return <Spinner />
               } else {
                    return (
                        <React.Fragment>
                            <h3 className='text-center mb-4'> {heading} </h3>
                        <div className='row'>
                            {recipes_list.map(item =>(
                                <Recipe key={item.recipe.recipe_id} recipe={item.recipe}/>
                            ))}
                        </div>
                        </React.Fragment>
                    );
               }
            }}
        </Consumer>  
    );
  }
}

export default Recipes;

