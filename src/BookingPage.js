import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (prop) => {
    return (
        <section className="booking">
            <BookingForm availableTimes={prop.availableTimes} setAvailableTimes={prop.setAvailableTimes}/>
        </section>
    );
}

export default BookingPage;