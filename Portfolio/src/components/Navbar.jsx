import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li><Link to="/"><button>About Me</button></Link></li>
                <li><Link to="/Project"><button>Projects</button></Link></li>
                <li><Link to="/ContactForm"><button>Contact</button></Link></li>
                <li><Link to="/Resume"><button>Resume</button></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
