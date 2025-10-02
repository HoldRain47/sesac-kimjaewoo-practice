import React from "react";

// components/Recipe/RecipeContainer.jsx

import Recipe from "./Recipe";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipeContainer() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipe(response["data"]["recipes"]);
    }

    fetchData();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Recipe 컴포넌트 반복 */}

        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
}
