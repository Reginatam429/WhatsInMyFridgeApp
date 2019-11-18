import React, {Component} from 'react';
import { Consumer } from '../Context';

class Recipes extends Component {
    render () {

    return (
        <Consumer>
            {value => {
                console.log(value);
                return  <h1>Recipes </h1>
            }}
        </Consumer>  
        
    );
  }
}

export default Recipes;

