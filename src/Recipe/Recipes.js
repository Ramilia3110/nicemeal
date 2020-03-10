import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

const Styles = styled.div`
  .search-form {
    min-height: 10vh;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .search-bar {
    width: 45%;
    height: 7vh;
    border: none;
    margin: 2em 1em;
    border-radius: 3em;
    font-size: 1.3rem;
  }

  input {
    text-align: center;
  }
  .search-button {
    background: rgb(9, 158, 89);
    border: none;
    border-radius: 3em;
    padding: 10px 30px;
    color: white;
    font-size: 1.3rem;
  }

  .recipes-blog {
    width: 80%;
    margin: 0 auto;
  }
  .recipes {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
  }
`;

const Recipes = () => {
  const APP_ID = "371c7184";
  const APP_KEY = "f79692a0b2038d1e6b10f9eef335e75f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    const result = data.meals;
    setRecipes(result);
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Styles>
      <div className="recipes-blog">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="e.g. chicken"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes == null ? (
            <p>Not Found</p>
          ) : (
            recipes.map(recipe => (
              <Recipe
                key={recipe.idMeal}
                title={recipe.strMeal}
                cuisine={recipe.strArea}
                image={recipe.strMealThumb}
                instructions={recipe.strInstructions}
              />
            ))
          )}
          ;
        </div>
      </div>
    </Styles>
  );
};

export default Recipes;
