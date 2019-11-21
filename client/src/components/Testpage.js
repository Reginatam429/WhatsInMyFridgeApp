import React from 'react';
import IngredientList from './IngredientList';
import Backend from './Api/Backend';

class Test extends React.Component {

  state = { ingredients: [] };

  
  onDataSubmit = async () => {
    const response = await Backend.get('/users/1/ingredients');
    console.log('hi');

    this.setState({ 
      ingredients: response.data
    });
  };

  render() {
    return(
        <div className="container-fluid padding">
            <div className="row wording text-center">
            <div className="col-12">
            <br/>
            <i className="far fa-user-circle fa-7x"></i>
            <IngredientList onSubmit={this.onDataSubmit}/>
          </div>
        </div>
    </div>
    );
  }
};

export default Test;