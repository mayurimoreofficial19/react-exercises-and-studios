import React from "react";
import styles from "./Ingredients.module.css";

let RecipeIngredients = () => {
  let ingredientsarr = ["Penne", "Chicken", "Tomatoes", "Red Onions", "Pesto"];

  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredientsarr[0]}</li>
        <li>{ingredientsarr[1]}</li>
        <li>{ingredientsarr[2]}</li>
        <li>{ingredientsarr[3]}</li>
        <li>{ingredientsarr[4]}</li>
      </ul>
    </div>
  );
};

export default RecipeIngredients;
