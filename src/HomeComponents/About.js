import aboutImg from '../img/about.png';

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
            <img alt="about" src={aboutImg} />
        </section>
    );
}

export default About;