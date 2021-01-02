import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "364d5953";
  const APP_KEY = "8200aaf03f1b1277860d6080dd883053";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
    // console.log(search);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
    // console.log(query);
  }

  useEffect(() => {
    getRecipes();
  }, [query]);


  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" value={search} onChange={handleChange} className="search-bar" />
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
