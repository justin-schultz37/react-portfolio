import React from 'react';
import Navbar from './Navbar.jsx';

const Header = () => {
    return (
        <header>
            <nav className="navcontainer">
                <h1>Justin Schultz Portfolio</h1>
                <Navbar />
            </nav>
        </header>
    );
};

export default Header;
