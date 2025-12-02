import React from 'react';
import Nav from './Nav';
import logo from './img/little-lemon-logo.png';

const Header = (props) => {
    return (
        <header>
            <img src={logo} />
            <Nav/>
        </header>
    );
}

export default Header;