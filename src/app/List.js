import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => person.profession === 'químico');
  const others = people.filter(person => person.profession !== 'químico');

  const chemistItems = chemists.map(person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
    </li>
  ));

  const otherItems = others.map (person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
    </li>
  ));

  return (
    <article>
      <h1>Científicos</h1>

      <h2>Químicos</h2>
      <ul>{chemistItems}</ul>

      <h2>Todos los demás</h2>
      <ul>{chemistItems}</ul>
    </article>
  )
}
