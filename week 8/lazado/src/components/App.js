import React, { useState } from 'react';
import Header from './Header';
import NavigationButton from './Navigation';

const App = () => {
    const menus = [
        { name: "Appliances", url: "#", id: 1 },
        { name: "Groceries", url: "#", id: 2 },
        { name: "Gadgets", url: "#", id: 3 },
        { name: "Clothing", url: "#", id: 4 }
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        console.log(`Added ${item} to the cart!`);
        setCart([...cart, item]);
    };

    return (
        <div>
            <Header />
            <nav style={styles.nav}>
                {menus.map(menu => (
                    <NavigationButton key={menu.id} name={menu.name} url={menu.url} />
                ))}
            </nav>
            <div style={styles.body}>
                <button onClick={() => addToCart("Asahy Power Juicer")}>Add Asahy Power Juicer</button>
                <button onClick={() => addToCart("Samsong Washing Machine")}>Add Samsong Washing Machine</button>
                <button onClick={() => addToCart("Hanabesh Electric Fan")}>Add Hanabesh Electric Fan</button>
            </div>
        </div>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        padding: '10px 0',
    },
    body: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
};

export default App;
