import React from 'react';
import Nav from './Nav';
import logo from './img/little-lemon-logo.png';
import menuImg from './img/menu.svg';

const Header = (props) => {
    return (
        <header>
            <div className="nav">
                <img alt="logo" className="logo" src={logo} />
                <Nav/>
                <img alt="menu" className="menu-icon" src={menuImg} />
            </div>
        </header>
    );
}

export default Header;