import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button">Projects</button>
                    <button className="btn btn-sm btn-outline-secondary me-2" type="button">About</button>
                    <button className="btn btn-sm btn-outline-secondary me-2" type="button">Contact</button>
                    <button className="btn btn-sm btn-outline-secondary me-2" type="button">Resume</button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;