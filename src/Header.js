import React from 'react';
import Nav from './Nav';
import logo from './img/little-lemon-logo.png';
import menuIcon from './img/menu-icon.svg';

const Header = (props) => {
    return (
        <header>
            <img className="logo" src={logo} />
            <Nav/>
            <img className="menu-icon" src={menuIcon} />
        </header>
    );
}

export default Header;