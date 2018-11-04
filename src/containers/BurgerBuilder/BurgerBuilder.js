import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export class BurgerBuilder extends Component{
  
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  };
  
  cloneState = () => {
    return {
      ...this.state
    };
  };

  addIngredientHandler = (type) => {
    const currentState = this.cloneState();
    currentState.ingredients[type] += 1;
    currentState.totalPrice += INGREDIENT_PRICE[type];
    this.setState(currentState);
  };
  
  removeIngredientHandler = (type) => {
    const currentState = this.cloneState();
    if (currentState.ingredients[type] > 0 ) {
      currentState.ingredients[type] -= 1;
      currentState.totalPrice -= INGREDIENT_PRICE[type];
    }
    this.setState(currentState);
  };
  
  calcDisabledInfo = () => {
    const disabledInfo = { ...this.cloneState().ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
  };
  
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={this.calcDisabledInfo()}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
