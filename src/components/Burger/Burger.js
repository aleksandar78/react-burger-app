import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  
  const ingredients = Object.keys(props.ingredients);
  let burgerIngredients = ingredients.map(ing => [...Array(props.ingredients[ing])]
    .map((_, i) => <BurgerIngredient key={ing + i} type={ing}/>))
    .reduce((acc, el) => acc.concat(el), []);
  
  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please start adding some ingredients</p>;
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      { burgerIngredients }
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};

burger.propTypes = {

};

export default burger;