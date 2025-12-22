import { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';

const BookingFormConfirm = (props) => {
    let dt = new Date();
    dt = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate());
    const [seating, setSeating] = useState('indoor');
    const [date, setDate] = useState(dt);
    const [times, setTimes] = useState();
    const [noOfGuest, setNoOfGuest] = useState('');
    const [occasion, setOccasion] = useState();
    const [timeOptions, setTimeOptions] = useState('');

    const updateStateData = (fn, e) => {
        let value = e.target.value;

        if (e.target.id === 'res-date') {
            let dt = new Date(value);
            props.setAvailableTimes(dt);
            fetchTimeOptions();
        }

        fn(value);
    }

    const fetchTimeOptions = useCallback(() => {
        let option = '<option value="">Select Time</option>';
        props.availableTimes.map((item, key) => (
            option += `<option key="${key}" value="${item}">${item}</option>`
        ))

        setTimeOptions(option);
    }, [props.availableTimes]);

    useEffect(() => {
        fetchTimeOptions();
    }, [fetchTimeOptions]);

    return (
        <div className="booking-form">
            <div>
                <label htmlFor="res-first-name">✱ First Name</label>
                <input type="text" id="res-first-name" value="" placeholder="First Name" required />
            </div>
            <div>
                <label htmlFor="res-last-name">✱ Last Name</label>
                <input type="text" id="res-last-name" value="" placeholder="Last Name" required />
            </div>
            <div>
                <label htmlFor="res-email">✱ Email</label>
                <input type="email" id="res-email" value="" placeholder="Email" required />
            </div>
            <div>
                <label htmlFor="res-phone-number">✱ Phone Number</label>
                <input type="number" id="res-phone-number" value="" required />
            </div>
            <div class="reservation-details">
                <div>Select Date</div>
                <div>10 Diners</div>
                <div>6:00 pm</div>
                <div>Birthday</div>
                <div>Outdoor seating</div>
                <div><input type="checkbox" /> You agree to our friendly <a>privacy policy</a></div>
            </div>
            <div>
                <label htmlFor="res-special-requests">Special Requests</label>
                <textarea id="res-special-requests" placeholder="Comment"></textarea>
            </div>
        </div>
    );
}

export default BookingFormConfirm;