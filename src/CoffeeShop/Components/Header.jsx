import React, { useState } from 'react';
import CoffeeHomePageList from '../coffeeHomePageList';
import CapuccinoList from './CapuccinoList';
import Icedcoffee from './IcedCoffee';
import LatteList from './LatteList';

function Header() {
    const [coffee, setCoffee] = useState([]);
    const [capuccino, setCapuccino] = useState([]);
    const [icedcoffee, setIcedcoffee] = useState([]);
    const [latte, setLatte] = useState([])
    

    const onClickLatte = () => {
        const newLatte = { id: latte.length + 1, status: false, name: 'Latte'};
        setLatte([...latte, newLatte]);
    }

    const removeLatte = (id) => {
        setLatte(latte.filter(lattee => lattee.id !== id))
    }

    const onClickCapuccino = () => {
        const newCapuccino = { id: capuccino.length + 1, status: false, name: 'Capuccino'};
        setCapuccino([...capuccino, newCapuccino]);
    }

    const removeIced = (id) => {
        setIcedcoffee(icedcoffee.filter(iced => iced.id !== id))
    }

    const onClickIcecoffee = (id) => {
        const newIcecoffee = { id: icedcoffee.length + 1, status: false, name: 'Iced Coffee'};
        setIcedcoffee([...icedcoffee, newIcecoffee]);
    }
    
    const removeCapuccino = (id) => {
        setCapuccino(capuccino.filter(capuccinoo => capuccinoo.id !== id))
    }

    const onClick = () => {
        const newCoffee = { id: coffee.length + 1, status: false };
        setCoffee([...coffee, newCoffee]);  
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
                <div className='Btncontainer'>
                    <button onClick={onClick}>+ Add Coffee</button>
                    <div className='hiddenButtons'>
                        <button onClick={onClickCapuccino}>+ Capuccino</button>
                        <button onClick={onClickIcecoffee}>+ Iced coffee</button>
                        <button onClick={onClickLatte}>+ Latte</button>
                    </div>
                </div>
            </header>
            <div className='contain'>
                {coffee.map((coffees) => (
                    <CoffeeHomePageList 
                        key={coffees.id}
                        id={coffees.id}
                        Status={coffees.status}
                        Remove={RemoveCoffee}/>
                        
                ))}

                {capuccino.map((capuccinoCoffee) => {
                    return(
                    <CapuccinoList
                        key={capuccinoCoffee.id}
                        id={capuccinoCoffee.id}
                        Status={capuccinoCoffee.status}
                        Remove={removeCapuccino}
                        name={capuccinoCoffee.name}
                    />
                    )
                })}

                {icedcoffee.map((iced) => {
                    return(
                    <Icedcoffee
                        key={iced.id}
                        id={iced.id}
                        Status={iced.status}
                        Remove={removeIced}
                        name={iced.name}
                    />
                    )
                })}

                {latte.map((lattee) => {
                    return(
                    <LatteList
                        key={lattee.id}
                        id={lattee.id}
                        Status={lattee.status}
                        Remove={removeLatte}
                        name={lattee.name}
                    />
                    )
                })}
            </div>
        </>
    );
}

export default Header;
