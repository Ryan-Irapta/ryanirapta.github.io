import React from 'react';

const NavigationButton = ({ name, url }) => {
    return (
        <button style={styles.button} onClick={() => console.log(`Navigating to ${url}`)}>
            {name}
        </button>
    );
};

const styles = {
    button: {
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default NavigationButton;
