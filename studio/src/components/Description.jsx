import styles from "./description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://www.saltandlavender.com/";
  let authorPhoto =
    "https://i.kym-cdn.com/entries/icons/original/000/020/115/idiot_sandwich.jpg";
  let authorName = "Smart Sandwich";
  return (
    <div className={styles.RecipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="You are wild for this Daniel"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Salt and Lavender</a>
      </div>
    </div>
  );
}
class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Chicken Pesto Pasta</h1>
          <p>
            chicken pesto pasta salad recipe is quick and bursting with fresh
            summer flavors. It’s the perfect make-ahead salad for BBQs,
            potlucks, or easy entertaining all season long!
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
