import { useState } from 'react';
import { useNavigate } from 'react-router';

import BookingForm from './BookingForm';
import BookingFormConfirm from './BookingFormConfirm';

import reservationImg1 from './img/reservation-img1.png';
import reservationImg2 from './img/reservation-img2.png';
import reservationImg3 from './img/reservation-img3.png';
import { submitAPI } from './js/api';

const BookingPage = (props) => {
    const navigate = useNavigate();
    const [bookingFormType, setBookingFormType] = useState('reserve');

    const submitBookingForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (submitAPI(formData)) {
            setBookingFormType('confirm');
        }
    }

    return (
        <>
            <form aria-label="booking form" onSubmit={(e) => submitBookingForm(e)}
                style={bookingFormType === 'reserve' ? { display: 'block' } : { display: 'none' }}>
                <section className="reservation" style={{ backgroundImage: `url(${props.heroBg})` }}>
                    <div className="title">Reservations</div>
                    <BookingForm {...props} />
                </section>
                <section>
                    <div className="reservation-photos">
                        <div className="reservation-photo">
                            <img alt="reservation 1" src={reservationImg1} />
                        </div>
                        <div className="reservation-photo">
                            <img alt="reservation 2" src={reservationImg2} />
                        </div>
                        <div className="reservation-photo">
                            <img alt="reservation 3" src={reservationImg3} />
                        </div>
                    </div>
                    <div className="reservation-submit-button">
                        <input type="submit" value="Reserve a Table" className="cta-button" />
                    </div>
                </section>
            </form>

            <form aria-label='booking form confirmation'
                style={bookingFormType === 'confirm' ? { display: 'block' } : { display: 'none' }}>
                <section className="reservation" style={{ backgroundImage: `url(${props.heroBg})` }}>
                    <BookingFormConfirm {...props} />
                </section>
                <section>
                    <div className="reservation-photos">
                        <div className="reservation-photo">
                            <img alt="reservation 1" src={reservationImg1} />
                        </div>
                        <div className="reservation-photo">
                            <img alt="reservation 2" src={reservationImg2} />
                        </div>
                        <div className="reservation-photo">
                            <img alt="reservation 3" src={reservationImg3} />
                        </div>
                    </div>
                    <div className="reservation-submit-button">
                        <input type="submit" value="Confirm Reservation" className="cta-button" />
                    </div>
                </section>
            </form>
        </>
    );
}

export default BookingPage;