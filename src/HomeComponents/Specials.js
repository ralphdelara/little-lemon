
import greekSaladImg from '../img/greek-salad.jpg';
import lemonDessertImg from '../img/lemon-dessert.jpg';
import bruchettaImg from '../img/bruchetta.jpg';
import deliveryIconImg from '../img/delivery-icon.svg';

const Specials = () => {
    return (
        <section className="specials">
            <div className="header">
                <span className="title">This week specials</span>
                <button className="cta-button online-menu">Online Menu</button>
            </div>
            <div className="items">
                <div className="item">
                    <div className="img-container">
                        <img alt="Greek salad" src={greekSaladImg} />
                    </div>
                    <div className="text">
                        <div className="title">Greek salad</div>
                        <div className="price">$12.99</div>
                        <div className="description">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </div>
                        <div className="order-link">
                            <a href="/">Order a delivery
                                <img alt="Delivery" src={deliveryIconImg} align="right" /></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img alt="Bruchetta" src={bruchettaImg} />
                    </div>
                    <div className="text">
                        <div className="title">Bruchetta</div>
                        <div className="price">$5.99</div>
                        <div className="description">
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </div>
                        <div className="order-link">
                            <a href="/">Order a delivery
                                <img alt="Delivery" src={deliveryIconImg} align="right" /></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img-container">
                        <img alt="Lemon Dessert" src={lemonDessertImg} />
                    </div>
                    <div className="text">
                        <div className="title">Lemon Dessert</div>
                        <div className="price">$5.00</div>
                        <div className="description">
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </div>
                        <div className="order-link">
                            <a href="/">Order a delivery
                                <img alt="Delivery" src={deliveryIconImg} align="right" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specials;