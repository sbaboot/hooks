import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Choisissez votre valeur de départ du compteur
          <input
            type='number'
            value={count}
            onChange={e => setCount(e.target.value)}
          />
        </label>
      </form>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter; 
