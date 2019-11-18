import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        recipes_list: [
            { recipe: {recipe_name: 'abc'} },
            { recipe: {recipe_name: '123'} }
        ],
        heading: 'Recommended Recipes'
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
