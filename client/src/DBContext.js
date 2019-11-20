import React, { Component } from 'react';
import axios from 'axios';

const DBContext = React.createContext();

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'SEARCH_RECIPES':
//             return {
//                 ...state,
//                 recipes_list: action.payload,
//                 heading:'Search Results'
//             };
//         default:
//             return state;
//     }
// }

export class Provider extends Component {
    state = {
        ingredients_list: [],
        heading: 'Ingredients',
        dispatch: action => this.setState(state => reducer(state,action))
    };

    componentDidMount(){
        axios.get(
            `http://localhost:5000/users/1/ingredients`
            )
            .then(res => {
                console.log(res.data);
                this.setState({ingredients_list: res.data.ingredient_name});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const DBConsumer = DBContext.DBConsumer;