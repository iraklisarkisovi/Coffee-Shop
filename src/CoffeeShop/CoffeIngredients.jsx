import React, { useState, useEffect } from 'react';

const CoffeIngredients = () => {
  // ინახავს ინგრედიენტების სიას localStorage-დან ან ცარიელ მასივს
  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem('ingredients');
    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });

  const [ingredient, setIngredient] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    // როდესაც ინგრედიენტების სია იცვლება, ვწერთ მათ localStorage-ში
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIngredient((prev) => ({ ...prev, [name]: value }));
  };

  const addIngredient = (e) => {
    e.preventDefault();

    // ანუ თუ ყველა ველი არ იქნება შევსებული ამოაგდებს alert-ს
    if (!ingredient.name || !ingredient.price || !ingredient.description) {
      alert('Please fill all fields!');
      return;
    }

    const newIngredient = { ...ingredient };
    newIngredient.id = Date.now(); // ეს წარმოდგენა არმაქვს chatgpt დავიხმარე ცოტატი დდ (უნიკალური id-სთვისაა)

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    // აქ ვასუფთავებთ ველებს
    setIngredient({ name: '', price: '', description: '' });
  };

  const deleteIngredient = (id) => {
    const updatedIngredients = ingredients.filter((ing) => ing.id !== id);
    setIngredients(updatedIngredients);
  };

  return (
    <div>
      <form onSubmit={addIngredient}>
        <input
          type="text"
          name="name"
          value={ingredient.name}
          placeholder="Ingredient Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          value={ingredient.price}
          placeholder="Price in Lari"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={ingredient.description}
          placeholder="Description"
          onChange={handleInputChange}
        />
        <button type="submit">Add Ingredient</button>
      </form>

      <ul>
        {ingredients.map((ing) => (
          <li key={ing.id}>
            <strong>{ing.name}</strong> - {ing.price}₾ - {ing.description} {/* ამის გარეშე ვერ დავინახავდით რა დავამატეთ */}
            <button onClick={() => deleteIngredient(ing.id)} style={{ marginLeft: '10px', color: 'red' }}> 
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeIngredients;