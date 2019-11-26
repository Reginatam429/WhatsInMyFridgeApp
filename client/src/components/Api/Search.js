import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../Context';

class Search extends Component {
    state = {
        ingredients: ''
    };

    findRecipe = (dispatch,e) => {
        e.preventDefault();

        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.ingredients}&app_id=${process.env.REACT_APP_EM_ID}&app_key=${process.env.REACT_APP_EM_KEY}&from=12`
            )
            .then(res => {
               //console.log(res.data);
               dispatch({
                    type: 'SEARCH_RECIPES',
                    payload: res.data.hits
               });

               this.setState({ingredients: ''});
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
           <Consumer>
               {value => {
                   const { dispatch } = value;
                   return (
                       <div className='card card-body mb-4 p-4'>
                           <h1 className='display-4 text-center search-text'>
                                <i className="fas fa-utensils fa-fw"></i>  
                                 Search for Recipes
                           </h1>
                           <p className='lead text-center search-text'>
                               Get some recipes for your ingredients:
                           </p>
                           <form onSubmit={this.findRecipe.bind(this, dispatch)}>
                               <div className="form-group">
                                   <input
                                     type='text' 
                                     className='form-control form-control-lg' 
                                     placeholder='Kale, Egg, Chicken...'
                                     name='ingredients'
                                     value={this.state.ingredients}
                                     onChange={this.onChange}
                                   /> 
                               </div>
                                    <button className='btn btn-warning btn-lrg btn-block mb-5' type='submit'>
                                        <i className="fa fa-search fa-fw"></i>
                                        Search
                                    </button>
                           </form>
                       </div>
                   )
               }}
           </Consumer>
        )
    }
}

export default Search;