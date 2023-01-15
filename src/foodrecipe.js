import React from "react";
import "./foodrecipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-main">
      <h1 className="title">{title}</h1>
      <img className="recipe-image" src={image} alt="" />
      <div className="ingredients">
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>

      <p className="calories">Calories : {calories}</p>
    </div>
  );
};
export default Recipe;