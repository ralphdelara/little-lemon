import { useEffect, useState } from 'react';

import Breadcrumbs from './Breadcrumbs';
import Nav from './Nav';
import logo from './img/little-lemon-logo.png';
import menuImg from './img/menu.svg';

const Header = (props) => {
    const uri = props.uri;
    const [showBreadcrumbs, setShowBreadcrumbs] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        /*const noBreadcrumbs = ['/'];
        if (!noBreadcrumbs.includes(uri.pathname)) {
            setShowBreadcrumbs(true);
        }*/
    }, [uri]);

    return (
        <>
            <header>
                <div className="nav">
                    <img alt="logo" className="logo" src={logo} />
                    <Nav {...props} toggleMenu={toggleMenu} />
                    <img alt="menu" className="menu-icon" src={menuImg} onClick={() => setToggleMenu(!toggleMenu)} />
                </div>
            </header>

            {showBreadcrumbs ? <Breadcrumbs/> : <></>}
        </>
    );
}

export default Header;