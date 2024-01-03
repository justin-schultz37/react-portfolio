// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footercontainer" id="contactinfo">
            <h3>Contact Info</h3>
            <ul>
                <li>Phone: 971-724-6011</li>
                <li>Email: justin.schultz37@gmail.com</li>
                <li><a href="https://github.com/justin-schultz37">GitHub Profile Link</a></li>
                <li><a href="https://www.linkedin.com/in/justin-schultz-08137882/">LinkedIn</a></li>
                <li><Link to="/Resume">Resume Download</Link></li>
            </ul>
        </section>
    );
};

export default Footer;
