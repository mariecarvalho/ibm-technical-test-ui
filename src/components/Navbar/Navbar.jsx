import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar-content'>
            <nav className='navbar'>
                <Link to="/create-magic">Create New Magic</Link>
                <Link to="/spells">Magic List</Link>
            </nav>
        </div>
    );
};

export default Navbar;