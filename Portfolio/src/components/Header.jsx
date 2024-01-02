import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <nav className="navcontainer">
                <h1>Justin Schultz</h1>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

// const Header = () => {
//     return (
//         <div>
//             <div className="navbar bg-body-tertiary">
//                 <div className="container-fluid">
//                     <span className="navbar-brand mb-0 h1">Justin's React Portfolio</span>
//                 </div>
//             </div>
//             <nav>
//                 <Navbar />
//             </nav>
//         </div>
//     );
// };

export default Header;
