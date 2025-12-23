import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import errorImg from './img/error.png';

const Error404 = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);
        document.title = props.appName + ' - Error';
    }, [props.appName]);

    return (
        <>
            <section className="error" style={{ backgroundImage: `url(${props.heroBg})` }}>
                <div>
                    <img alt="error" src={errorImg} width="250" />
                </div>
                <div>
                    Oh no!!! This page doesn't exist
                </div>
            </section>
            <section align="center" style={{fontSize: '40px'}}>
                The page you're looking for might <br/>
                have moved or doesn't exist.<br />
                Try heading back to our homepage.<br /><br />
                <button className="cta-button" onClick={() => {navigate('/')}}>Home</button>
            </section>
        </>
    );
}

export default Error404;