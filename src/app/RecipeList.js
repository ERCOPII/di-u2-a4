import { recipes } from './recipes.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
