import { useEffect } from 'react';

import Hero from './HomeComponents/Hero';
import Specials from './HomeComponents/Specials';
import Testimonials from './HomeComponents/Testimonials';
import About from './HomeComponents/About';

const Homepage = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = props.appName;
    }, [props.appName]);

    return (
        <>
            <Hero {...props} />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
}

export default Homepage;