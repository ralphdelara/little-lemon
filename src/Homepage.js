import Hero from './HomeComponents/Hero';
import Specials from './HomeComponents/Specials';
import Testimonials from './HomeComponents/Testimonials';
import About from './HomeComponents/About';

const Homepage = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
}

export default Homepage;