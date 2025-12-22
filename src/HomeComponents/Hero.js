import { useNavigate } from 'react-router';
import heroImage from '../img/hero-image.jpg';

const Hero = (props) => {
    const navigate = useNavigate();

    return (
        <section className="hero" style={{backgroundImage: `url(${props.heroBg})`}}>
            <div className="text">
                <div className="title">Little Lemon</div>
                <div className='subtitle'>Chicago</div>
                <div className='description'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </div>
                <button className="cta-button" onClick={() => navigate('/reservation')}>Reserve a Table</button>
            </div>
            <div className="image">
                <img alt="hero" src={heroImage} />
            </div>
        </section>
    );
}

export default Hero;