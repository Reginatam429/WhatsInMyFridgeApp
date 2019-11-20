import React, { Component } from 'react';
import { DBConsumer } from '../../DBContext'
import Ingredient from './Ingredient';
import Spinner from '../Loading'

class Ingredients extends Component {
    render() {
        return (
            <div>
                <DBConsumer>
                    {value => {
                    const { ingredients_list, heading } = value;
                    console.log(value);

                    if(ingredidents_list === undefined || ingredients_list.length === 0) {
                            return <Spinner />
                    } else {
                            return (
                                <React.Fragment>
                                    <h3 className='text-center mb-4'> {heading} </h3>
                                <div className='row'>
                                    {ingredients_list.map(item =>(
                                        <Ingredient key={item.ingredients} ingredient={item.ingredients}/>
                                    ))}
                                </div>
                                </React.Fragment>
                            );
                    }
                    }}
                </DBConsumer>  
            </div>
        )
    }
}

export default Ingredients;