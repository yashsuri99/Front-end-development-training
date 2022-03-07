import React from 'react';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            {/* ideally these links will be within a list */}
            <a href="/home">Home</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact us</a>
        </nav>
    );
};

export default Navbar;