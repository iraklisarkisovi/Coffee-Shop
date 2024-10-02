import React, { useState } from 'react';
import CoffeeHomePageList from '../coffeeHomePageList';

function Header() {
    const [coffee, setCoffee] = useState([]);

    const onClick = () => {
        const newCoffee = { id: coffee.length + 1, status: false };
        setCoffee([...coffee, newCoffee]); // Correctly update the state
    };

    const RemoveCoffee = (id) => {
        setCoffee(coffee.filter(coff => coff.id !== id))
    }

    return (
        <>
            <header>
                <a href="#">
                    <div className='container'>
                        <img src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-logo-elements-logo-objects-3.png" alt="Coffee" className='logo'/>
                        <h2>Welcome to Coffee Shop</h2>
                    </div>
                </a>
                <button onClick={onClick}>+ Add Coffee</button>
            </header>
            <div className='contain'>
                {coffee.map((coffees) => (
                    <CoffeeHomePageList 
                        key={coffees.id}
                        id={coffees.id}
                        Status={coffees.status}
                        Remove={RemoveCoffee}/>
                        
                ))}
            </div>
        </>
    );
}

export default Header;
