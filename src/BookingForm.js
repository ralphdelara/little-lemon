import { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { submitAPI } from './js/api';

import reservationImg1 from './img/reservation-img1.png';
import reservationImg2 from './img/reservation-img2.png';
import reservationImg3 from './img/reservation-img3.png';

const BookingForm = (props) => {
    let dt = new Date();
    dt = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate());

    const [formData, setFormData] = useState({
        seating: 'Indoor seating',
        date: dt,
        times: '',
        noOfDiners: '',
        occasion: '',
    });
    const [timeOptions, setTimeOptions] = useState('');

    const updateFormData = (e) => {
        const { name, value } = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const fetchTimeOptions = useCallback(() => {
        let option = '<option value="">Select Time</option>';
        props.availableTimes.map((item, key) => (
            option += `<option key="${key}" value="${item}">${item}</option>`
        ))

        setTimeOptions(option);
    }, [props.availableTimes]);

    const submitBookingForm = (e) => {
        e.preventDefault();
        const formDataAPI = new FormData(e.target);

        if (submitAPI(formDataAPI)) {
            props.setBookingFormData({ ...props.bookingFormData, ...formData });
            props.setBookingFormType('confirm');
            window.scrollTo(0, 0);
        }
    }

    useEffect(() => {
        fetchTimeOptions();
    }, [fetchTimeOptions]);

    return (
        <form aria-label="booking form" onSubmit={submitBookingForm}
            style={props.bookingFormType === 'reserve' ? { display: 'block' } : { display: 'none' }}>
            <section className="reservation" style={{ backgroundImage: `url(${props.heroBg})` }}>
                <div className="title">Reservations</div>
                <div className="booking-form">
                    <div className="seating">
                        <label className="radio" htmlFor="indoor"><b>Indoor seating</b>
                            <input type="radio" name="seating" id="indoor" value="Indoor seating" checked={formData.seating === 'Indoor seating'} onChange={updateFormData} required />
                        </label>
                    </div>
                    <div className="seating">
                        <label className="radio" htmlFor="outdoor"><b>Outdoor seating</b>
                            <input type="radio" name="seating" id="outdoor" value="Outdoor seating" checked={formData.seating === 'Outdoor seating'} onChange={updateFormData} required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="res-date">Date</label>
                        <input type="date" name="date" id="res-date" value={formData.date} onChange={updateFormData} required />
                    </div>
                    <div>
                        <label htmlFor="noOfDiners">Number of Diners</label>
                        <select name="noOfDiners" value={formData.noOfDiners} id="noOfDiners" onChange={updateFormData} required>
                            <option value="">No. of Diners</option>
                            {
                                Array.from({ length: 10 }, (_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="occasion">Occasion</label>
                        <select name="occasion" id="occasion" value={formData.occasion} onChange={updateFormData} required>
                            <option value="">Select Occasion</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Award Ceremonies">Award Ceremonies</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Family Gatherings">Family Gatherings</option>
                            <option value="Funeral">Funeral</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Wedding">Wedding</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="res-time">Time</label>
                        <select id="res-time" name="times" value={formData.times} onChange={updateFormData} required>
                            {parse(timeOptions)}
                        </select>
                    </div>
                </div>
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
    );
}

export default BookingForm;