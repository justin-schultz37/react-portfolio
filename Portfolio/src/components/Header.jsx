import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Justin's React Portfolio</span>
                </div>
            </div>
            <nav>
                <Navbar />
            </nav>
        </div>
    );
};

export default Header;
