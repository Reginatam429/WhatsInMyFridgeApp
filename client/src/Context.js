import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        recipes_list: [],
        heading: 'Recommended Recipes'
    };

    componentDidMount(){
        axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=kale+chicken&app_id=${process.env.REACT_APP_EM_ID}&app_key=${process.env.REACT_APP_EM_KEY}&from=10`
            )
            .then(res => {
                //console.log(res.data);
                this.setState({recipes_list: res.data.hits});
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

export const Consumer = Context.Consumer;
