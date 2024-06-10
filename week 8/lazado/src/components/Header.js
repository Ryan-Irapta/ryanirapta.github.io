import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>Lazado</h1>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#333',
        color: '#fff',
    },
};

export default Header;
