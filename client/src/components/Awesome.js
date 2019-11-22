import React from 'react';
import axios from 'axios';
import IngredientList from './IngredientList';
import AddIngredient from './AddIngredient';



class Awesome extends React.Component {
    
    constructor (props) {
        super(props);
    }
    
    state = {ingredients: []};
    
    componentDidUpdate () {
        if(this.props.userID)
        axios.get( `https://whats-in-my-fridge-api.herokuapp.com/users/${this.props.userID}/ingredients`)
        .then(response => {
            this.setState({ ingredients: response.data });
            //console.log(this.state.ingredients)
            
        })


    }

    render() {
       // console.log(this.props.userInfo);

        return (
            <div className="center">
                <h2>Add to Fridge:</h2>
                <AddIngredient userID={this.props.userID} />
                <h2>Currently in Fridge:</h2>
                <br />
                <IngredientList  ingredients={this.state.ingredients}  />
            </div>
        )
    }
}

export default Awesome;