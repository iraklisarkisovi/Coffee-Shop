import React, { useState } from 'react';

const Icedcoffee = ({ Status, Remove, id, name }) => {
  const [statuss, setStatus] = useState(!Status);  
  const [ingredients, setIngredients] = useState(['Sugar','Milk',"Water","Coffee","Ice","Ice cream"]);  

  const toggleStatus = () => {
    setStatus(!statuss);
  };

  const toggleIngredient = (ingredient) => {
    setIngredients((prevIngredients) => {
      if (prevIngredients.includes(ingredient)) {
        return prevIngredients.filter((ing) => ing !== ingredient);
      } else {
        return [...prevIngredients, ingredient];
      }
    });
  };

  return (
    <div> 
      <div className='coffeeRedact'> 

        <div className={ingredients.length > 0 ? 'filled-cup' : 'empty-cup'}></div>
        <h3>{name}</h3>

        <div>
          <strong>Ingredients:</strong>
          <ul className='ull'>
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>Add ingredients on your taste</li>
            )}
          </ul>
        </div>

        <div className='buttons'>
          <div className='mainButtons'>
            <button onClick={() => Remove(id)}>Remove exact coffee</button>
            <button onClick={toggleStatus}>
              {statuss ? '+ Add ingredients' : '- Add ingredients'}
            </button>
          </div>

          <div className={statuss ? "closed" : "opened"}>
            <button onClick={() => toggleIngredient('Sugar')}>
              {ingredients.includes('Sugar') ? '- Sugar' : '+ Sugar'}
            </button>
            <button onClick={() => toggleIngredient('Coffee')}>
              {ingredients.includes('Coffee') ? '- Coffee' : '+ Coffee'}
            </button>
            <button onClick={() => toggleIngredient('Milk')}>
              {ingredients.includes('Milk') ? '- Milk' : '+ Milk'}
            </button>
            <button onClick={() => toggleIngredient('Water')}>
              {ingredients.includes('Water') ? '- Water' : '+ Water'}
            </button>
            <button onClick={() => toggleIngredient('Ice')}>
              {ingredients.includes('Ice') ? '- Ice' : '+ Ice'}
            </button>
            <button onClick={() => toggleIngredient('Ice cream')}>
              {ingredients.includes('Ice cream') ? '- Ice cream' : '+ Ice cream'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icedcoffee;
