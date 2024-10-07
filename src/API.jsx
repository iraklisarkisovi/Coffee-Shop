import React, { createContext, useContext, useState } from 'react';

const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const apikey = "5bIIgDSds3TEzxUC29AobdCjZICoHqcjvYG-1O9y2Muo5QA67w";
  const [coffeeList, setCoffeeList] = useState([]);

  const GetCoffees = () => {
    fetch('https://crudapi.co.uk/api/v1/Coffee', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Response failed');
        return res.json();
      })
      .then(data => {
        setCoffeeList(data.items.map(coffee => ({
          Coffee: coffee.name,
          uuid: coffee._uuid,
          status: coffee.status
        })));
      })
      .catch(err => console.log(err));
  };

  const onFormSubmit = (Coffee) => {
    fetch('https://crudapi.co.uk/api/v1/Coffee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`
      },
      body: JSON.stringify([{ Coffee, status: false }])
    })
      .then(res => {
        if (!res.ok) throw new Error('Response failed');
        return res.json();
      })
      .then(data => {
        setCoffeeList(prev => [
          ...prev,
          {
            Coffee: data.items[0].Coffee,
            uuid: data.items[0]._uuid,
            status: data.items[0].status
          }
        ]);
      })
      .catch(err => console.log(err));
  };

  const toggleComplete = (uuid, status) => {
    fetch(`https://crudapi.co.uk/api/v1/Coffee/${uuid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`
      },
      body: JSON.stringify([{ status: !status }])
    })
      .then(res => {
        if (!res.ok) throw new Error('Response failed');
        return res.json();
      })
      .then(() => {
        setCoffeeList(coffeeList.map(coffee =>
          coffee.uuid === uuid ? { ...coffee, status: !coffee.status } : coffee
        ));
      })
      .catch(err => console.log(err));
  };

  const deleteCoffees = (uuid) => {
    fetch(`https://crudapi.co.uk/api/v1/Coffee/${uuid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Response failed');
        return res.json();
      })
      .then(() => {
        setCoffeeList(coffeeList.filter(coffee => coffee.uuid !== uuid));
      })
      .catch(err => console.log(err));
  };

  return (
    <CoffeeContext.Provider value={{ coffeeList, GetCoffees, onFormSubmit, toggleComplete, deleteCoffees }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => {
  return useContext(CoffeeContext);
};
