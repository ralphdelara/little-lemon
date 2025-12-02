import React from 'react';
import heroImage from './img/hero-image.jpg'

const Main = () => {
    return (
        <main>
            <section class="hero">
                <div class="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <br/>
                    <span>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </span>
                    <br/>
                    <br/>
                    <button class="button1">Reserve a Table</button>
                </div>
                <div class="image">
                    <img src={heroImage} />
                </div>
            </section>
            <section class="specials">
                This week specials
                <div>
                    <div>Greek salad</div>
                    <div>Bruchetta</div>
                    <div>Lemon Dessert</div>
                </div>
            </section>
        </main>
    );
}

export default Main;