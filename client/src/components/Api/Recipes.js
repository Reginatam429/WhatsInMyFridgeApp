import React, {Component} from 'react';
import { Consumer } from '../../Context';
import Spinner from '../Loading'

class Recipes extends Component {
    render () {

    return (
        <Consumer>
            {value => {
               const { recipes_list } = value;
               console.log(value);

               if(recipes_list === undefined || recipes_list.length === 0) {
                    return <Spinner />
               } else {
                    return <h1>Recipes loaded!</h1>;
               }
            }}
        </Consumer>  
    );
  }
}

export default Recipes;

