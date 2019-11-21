import React from 'react';
import axios from 'axios';
import IngredientList from './IngredientList';
//import AddIngredient from './AddIngredient';



class Awesome extends React.Component {
    
    
    state = {ingredients: []};
    
    componentDidMount () {
        axios.get(`http://localhost:5000/users/2/ingredients`)
        .then(response => {
            this.setState({ ingredients: response.data });
            //console.log(this.state.ingredients)
        })

    }

    render() {
        return (
            <div>
                <h2>Add to Fridge:</h2>
                {/* <AddIngredient /> */}
                <h2>Currently in Fridge:</h2>
                <br />
                <IngredientList  ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Awesome;