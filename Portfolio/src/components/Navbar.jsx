import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <form class="container-fluid justify-content-start">
                    <button class="btn btn-outline-success me-2" type="button">Projects</button>
                    <button class="btn btn-sm btn-outline-secondary me-2" type="button">About</button>
                    <button class="btn btn-sm btn-outline-secondary me-2" type="button">Contact</button>
                    <button class="btn btn-sm btn-outline-secondary me-2" type="button">Resume</button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;