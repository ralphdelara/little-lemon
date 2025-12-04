import testimonialImg1 from '../img/testimonial1.jpg';
import testimonialImg2 from '../img/testimonial2.jpg';
import testimonialImg3 from '../img/testimonial3.jpg';
import testimonialImg4 from '../img/testimonial4.jpg';
import star from '../img/star.svg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="title">Testimonials</div>
            <div className="items">
                <div className="item">
                    <div className="rating">
                        <span>Rating</span>
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                    </div>
                    <div className="person">
                        <img alt="testimonial person" src={testimonialImg1} align="left" />
                        <span className="name">Pamela Snow</span>
                    </div>
                    <div className="review">
                        <i>"Fast and reliable, but occasional delays during peak hours."</i>
                    </div>
                </div>
                <div className="item">
                    <div className="rating">
                        <span>Rating</span>
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                    </div>
                    <div className="person">
                        <img alt="testimonial person" src={testimonialImg2} align="left" />
                        <span className="name">Heidi Elliston</span>
                    </div>
                    <div className="review">
                        <i>"Wide variety of cuisines, though more vegan options would be great."</i>
                    </div>
                </div>
                <div className="item">
                    <div className="rating">
                        <span>Rating</span>
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                    </div>
                    <div className="person">
                        <img alt="testimonial person" src={testimonialImg3} align="left" />
                        <span className="name">Michael Jarvis</span>
                    </div>
                    <div className="review">
                        <i>"Intuitive interface, seamless checkout, and real-time order tracking."</i>
                    </div>
                </div>
                <div className="item">
                    <div className="rating">
                        <span>Rating</span>
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                        <img alt="rating" src={star} />
                    </div>
                    <div className="person">
                        <img alt="testimonial person" src={testimonialImg4} align="left" />
                        <span className="name">Jose Musser</span>
                    </div>
                    <div className="review">
                        <i>"Mostly correct, but drinks sometimes leak. Meals stay fresh!"</i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;