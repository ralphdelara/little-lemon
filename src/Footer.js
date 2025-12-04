import footerImg from './img/footer.png';
import facebookImg from './img/facebook.svg';
import twitterImg from './img/twitter.svg';
import youtubeImg from './img/youtube.svg';
import addressImg from './img/address.svg';
import phoneImg from './img/phone.svg';
import emailImg from './img/email.svg';

const Footer = () => {
    return (
        <footer>
            <div>
                <img alt="footer" src={footerImg} />
            </div>
            <div>
                <h4>Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className="contact">
                <h4>Contact</h4>
                <ul>
                    <li><img alt="address" src={addressImg} /> 18 Pike Place, Pike Place Market, WA, Seattle 98101</li>
                    <li><img alt="phone" src={phoneImg} /> +1 919-555-8247</li>
                    <li><img alt="email" src={emailImg} /> contact@little-lemon.com</li>
                </ul>
            </div>
            <div className="social-media">
                <h4>Social Media Links</h4>
                <img alt="facebook" src={facebookImg} />
                <img alt="twitter" src={twitterImg} />
                <img alt="youtube" src={youtubeImg} />
            </div>
        </footer>
    );
}

export default Footer;