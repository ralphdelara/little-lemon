import { useState } from 'react';
import dateImg from './img/reservation-date.svg';
import timeImg from './img/reservation-time.svg';
import occasionImg from './img/reservation-occasion.svg';
import dinersImg from './img/reservation-diners.svg';
import reservationConfirmImg1 from './img/reservation-confirm1.png';
import reservationConfirmImg2 from './img/reservation-confirm2.png';
import reservationConfirmImg3 from './img/reservation-confirm3.png';

const BookingFormConfirm = (props) => {
    const initFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        specialRequests: '',
        agreePrivacyPolicy: false
    };
    const [formData, setFormData] = useState(initFormData);
    const [confirmationMessage, setConfirmationMessage] = useState(false);

    let dateInfo = new Date(props.bookingFormData.date);
    dateInfo = dateInfo.toLocaleString('default', {month: 'short'}) + ' ' + dateInfo.getDate() + ', ' + dateInfo.getFullYear();

    const updateFormData = (e) => {
        const { name, value } = e.target;
        let inputValue = value;

        if (name === 'agreePrivacyPolicy') {
            inputValue = !formData.agreePrivacyPolicy;
        }

        setFormData(prevData => ({
            ...prevData,
            [name]: inputValue
        }));
    }

    const confirmBookingDetails = (e) => {
        e.preventDefault();
        setConfirmationMessage(true);

        const bookingFormData = {...props.bookingFormData, ...formData}
        console.log(bookingFormData);

        setTimeout(() => {
            setFormData(initFormData);
            setConfirmationMessage(false);
        }, 5000);
    }

    return (
        <form aria-label='booking form confirmation'
            style={props.bookingFormType === 'confirm' ? { display: 'block' } : { display: 'none' }}
            onSubmit={confirmBookingDetails}>
            <section className="reservation" style={{ backgroundImage: `url(${props.heroBg})` }}>
                <div className="booking-form">
                    <div>
                        <label htmlFor="res-first-name">✱ First Name</label>
                        <input type="text" id="res-first-name" name="firstName" value={formData.firstName} onChange={updateFormData} placeholder="First Name" required />
                    </div>
                    <div>
                        <label htmlFor="res-last-name">✱ Last Name</label>
                        <input type="text" id="res-last-name" name="lastName" value={formData.lastName} onChange={updateFormData} placeholder="Last Name" required />
                    </div>
                    <div>
                        <label htmlFor="res-email">✱ Email</label>
                        <input type="email" id="res-email" name="email" value={formData.email} onChange={updateFormData} placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="res-phone-number">✱ Phone Number</label>
                        <input type="number" id="res-phone-number" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" onChange={updateFormData} required />
                    </div>
                    <div className="reservation-details">
                        <div onClick={() => props.setBookingFormType('reserve')}><img src={dateImg} alt="date info" align="left" /> {dateInfo}</div>
                        <div onClick={() => props.setBookingFormType('reserve')}><img src={dinersImg} alt="diners info" align="left" />{props.bookingFormData.noOfDiners} Diners</div>
                        <div onClick={() => props.setBookingFormType('reserve')}><img src={timeImg} alt="times info" align="left" />{props.bookingFormData.times}</div>
                        <div onClick={() => props.setBookingFormType('reserve')}><img src={occasionImg} alt="occasion info" align="left" />{props.bookingFormData.occasion}</div>
                    </div>
                    <div>
                        <label htmlFor="res-special-requests">Special Requests</label>
                        <textarea id="res-special-requests" name="specialRequests" value={formData.specialRequests} placeholder="Comment" rows="5" onChange={updateFormData}></textarea>
                    </div>
                    <div align="center"><b>{props.bookingFormData.seating}</b></div>
                    <div>
                        <label htmlFor="res-agree">
                            <input type="checkbox" id="res-agree" name="agreePrivacyPolicy" value="1" checked={formData.agreePrivacyPolicy} onChange={updateFormData} required />
                            You agree to our friendly <a href="/privacy-policy">privacy policy</a>
                        </label>
                    </div>
                </div>
            </section>
            <section>
                <div className="reservation-photos">
                    <div className="reservation-photo">
                        <img alt="reservation 1" src={reservationConfirmImg1} />
                    </div>
                    <div className="reservation-photo">
                        <img alt="reservation 2" src={reservationConfirmImg2} />
                    </div>
                    <div className="reservation-photo">
                        <img alt="reservation 3" src={reservationConfirmImg3} />
                    </div>
                </div>
                <div className="reservation-submit-button">
                    <input type="submit" value="Confirm Reservation" className="cta-button" />
                </div>
                <div className={"reservation-confirmed-message" + (confirmationMessage ? ' active' : '')}>
                    Your Reservation has been<br />
                    confirmed check your email
                </div>
            </section>
        </form >
    );
}

export default BookingFormConfirm;