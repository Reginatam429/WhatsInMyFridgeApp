import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../Context';

class Search extends Component {
    state = {
        recipeLabel: ''
    }
    render() {
        return (
           <Consumer>
               {value => {
                   return (
                       <div className='card card-body mb-4 p-4'>
                           <h1 className='display-4 text-center'>
                                <i class="fas fa-utensils"></i>
                                Search for Recipes
                           </h1>
                           <p className='lead text-center'>
                               Get some recipes for your ingredients
                           </p>
                       </div>
                   )
               }}
           </Consumer>
        )
    }
}

export default Search;