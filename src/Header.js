import React from 'react';
import Nav from './Nav';
import logo from './img/little-lemon-logo.png';
import menuIcon from './img/menu-icon.svg';

const Header = (props) => {
    return (
        <header>
            <img class="logo" src={logo} />
            <Nav/>
            <img class="menu-icon" src={menuIcon} />
        </header>
    );
}

export default Header;