const Nav = (props) => {
    const uriPath = props.uri.pathname;

    return (
        <nav>
            <ul className={props.toggleMenu ? 'active' : ''}>
                <li><a href="/" className={uriPath === '/' ? 'active' : ''}>Home</a></li>
                <li><a href="/about" className={uriPath === '/about' ? 'active' : ''}>About</a></li>
                <li><a href="/menu" className={uriPath === '/menu' ? 'active' : ''}>Menu</a></li>
                <li><a href="/reservation" className={uriPath === '/reservation' ? 'active' : ''}>Reservation</a></li>
                <li><a href="/order-online" className={uriPath === '/order-online' ? 'active' : ''}>Order Online</a></li>
                <li><a href="/login" className={uriPath === '/login' ? 'active' : ''}>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;