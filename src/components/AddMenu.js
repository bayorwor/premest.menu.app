import React, { useState, useContext } from "react";
import { MenuContext } from "../context/menu.context";

function AddMenu() {
  const { addMenu } = useContext(MenuContext);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenu({
      name,
      type,
      ingredients: ingredients.split(","),
      recipe: recipe.split(","),
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(t) => setName(t.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            value={type}
            className="form-control"
            onChange={(t) => setType(t.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            value={ingredients}
            className="form-control"
            onChange={(t) => setIngredients(t.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipe">Recipe</label>
          <input
            type="text"
            value={recipe}
            className="form-control"
            onChange={(t) => setRecipe(t.target.value)}
          />
        </div>

        <button className="btn btn-danger mt-5" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
