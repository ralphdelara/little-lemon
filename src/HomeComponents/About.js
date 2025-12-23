import about1Img from '../img/about1.png';
import about2Img from '../img/about2.png';

const About = () => {
    return (
        <section className="about">
            <div className="text">
                <div className="title">Little Lemon</div>
                <div className="subtitle">Chicago</div>
                <div className="description">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </div>
            </div>
            <div className="image">
                <img alt="about" src={about1Img} />
                <img alt="about" src={about2Img} />
            </div>
        </section>
    );
}

export default About;