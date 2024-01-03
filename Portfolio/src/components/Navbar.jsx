import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <ul className="nav">
                <li>
                    <Link to="/" onClick={() => handleLinkClick('/')}>
                        <button className={activeLink === '/' ? 'btn btn-warning btn-lg' : 'btn btn-lg'}>
                            About Me
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/Project" onClick={() => handleLinkClick('/Project')}>
                        <button className={activeLink === '/Project' ? 'btn btn-warning btn-lg' : 'btn btn-lg'}>
                            Projects
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/ContactForm" onClick={() => handleLinkClick('/ContactForm')}>
                        <button className={activeLink === '/ContactForm' ? 'btn btn-warning btn-lg' : 'btn btn-lg'}>
                            Contact
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/Resume" onClick={() => handleLinkClick('/Resume')}>
                        <button className={activeLink === '/Resume' ? 'btn btn-warning btn-lg' : 'btn btn-lg'}>
                            Resume
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;


