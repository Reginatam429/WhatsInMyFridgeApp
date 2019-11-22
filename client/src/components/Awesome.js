import React from 'react';
import axios from 'axios';
import IngredientList from './IngredientList';
import AddIngredient from './AddIngredient';



class Awesome extends React.Component {
    
    constructor (props) {
        super(props);
    }
    
    state = {ingredients: []};
    
    componentDidMount () {
        
        axios.get('http://localhost:5000/users/4/ingredients')
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
                <AddIngredient />
                <h2>Currently in Fridge:</h2>
                <br />
                <IngredientList  ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Awesome;