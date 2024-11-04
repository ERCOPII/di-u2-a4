export default function Recipe({ id, name, ingredients }) {
    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> // La key interior para cada ingrediente
          ))}
        </ul>
      </div>
    );
  }