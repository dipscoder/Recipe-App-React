import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "364d5953";
  const APP_KEY = "8200aaf03f1b1277860d6080dd883053";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
