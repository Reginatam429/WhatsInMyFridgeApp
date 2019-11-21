import React from 'react';
import axios from 'axios';
import IngredientList from './IngredientList';

class Awesome extends React.Component {

    state = {ingredients: []};

    componentDidMount () {
        axios.get('http://localhost:5000/users/2/ingredients')
        .then(response => {
            this.setState({ ingredients: response.data });
            //console.log(this.state.ingredients)
        })

    }

    render() {
        return (
            <div>
                <h1>Currently in Fridge:</h1>
                <br />
                <IngredientList  ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Awesome;