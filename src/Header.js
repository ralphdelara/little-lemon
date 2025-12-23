import { useState } from 'react';

import Nav from './Nav';
import logo from './img/little-lemon-logo.png';
import menuImg from './img/menu.svg';

const Header = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <header>
                <div className="nav">
                    <img alt="logo" className="logo" src={logo} />
                    <Nav {...props} toggleMenu={toggleMenu} />
                    <img alt="menu" className="menu-icon" src={menuImg} onClick={() => setToggleMenu(!toggleMenu)} />
                </div>
            </header>
        </>
    );
}

export default Header;