import React from 'react';
import axios from 'axios';
import IngredientList from './IngredientList';
import AddIngredient from './AddIngredient';
import ScrollBarPage from './Scrollbar';




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
            <div >
                <h2 className="userpage-header">Add to Fridge:</h2>
                <AddIngredient userID={this.props.userID} />
                <h2 className="userpage-header">Currently in Fridge:</h2>
                <ScrollBarPage ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Awesome;