import React from 'react';

class AddIngredient extends React.Component {
  
  state = { 
      user_id: '',
      ingredient_name: '',
      category: '',
      amount: '' 
    };

  // change the state using .setState  
  onInputChange = (event) => {
    this.setState(
        { user_id: event.target.value },
        { ingredient_name: event.target.value },
        { category: event.target.value },
        { amount: event.target.value } 
        );
  };

  //callback to handle submission of forms   
  onFormSubmit = (event) => {
    // prevents browser from automatically submitting the form 
    event.preventDefault();

    //callback from parent component 
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return(
      <div class="form-group">
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div>
            <label> Add Ingredient </label>
            <input 
              placeholder="Ex. Chicken"
              type="text" 
              value={this.state.term}

              // create & use a callback method to handle changes
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label> Category </label>
            <input 
              placeholder="Ex. Poultry"
              type="text" 
              value={this.state.term}

              // create & use a callback method to handle changes
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label> Amount </label>
            <input 
              placeholder="Ex. 5lbs"
              type="text" 
              value={this.state.term}

              // create & use a callback method to handle changes
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    );
  }
}

export default AddIngredient; 