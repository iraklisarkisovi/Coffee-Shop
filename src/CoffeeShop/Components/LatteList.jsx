import React, { useState } from 'react';

const LatteList = ({ Status, Remove, id, name }) => {
  const [statuss, setStatus] = useState(!Status);  
  const [ingredients, setIngredients] = useState(['sugar','Coffee','Milk','Ice','Chocolate Syrup','Vanilla Syrup','Cream','Water']);  


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
              <li>No ingredients added yet</li>
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
            <button onClick={() => toggleIngredient('Chocolate Syrup')}>
              {ingredients.includes('Chocolate Syrup') ? '- Chocolate Syrup' : '+ Chocolate Syrup'}
            </button>
            <button onClick={() => toggleIngredient('Vanilla Syrup')}>
              {ingredients.includes('Vanilla Syrup') ? '- Vanilla Syrup' : '+ Vanilla Syrup'}
            </button>
            <button onClick={() => toggleIngredient('Cream')}>
              {ingredients.includes('Cream') ? '- Cream' : '+ Cream'}
            </button>
            <button onClick={() => toggleIngredient('Water')}>
              {ingredients.includes('Water') ? '- Water' : '+ Water'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatteList;
