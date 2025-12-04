import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import parse from 'html-react-parser';
import {submitAPI} from './js/api';

const BookingForm = (prop) => {
    let dt = new Date();
    dt = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate());
    const [date, setDate] = useState(dt);
    const [times, setTimes] = useState();
    const [noOfGuest, setNoOfGuest] = useState(0);
    const [occasion, setOccasion] = useState();
    const [timeOptions, setTimeOptions] = useState('');
    const navigate = useNavigate();

    const updateStateData = (fn, e) => {
        let value = e.target.value;

        if (e.target.id === 'res-date') {
            let dt = new Date(value);
            prop.setAvailableTimes(dt);
            fetchTimeOptions();
        }

        fn(value);
    }

    const fetchTimeOptions = useCallback(() => {
        let option = '<option></option>';
        prop.availableTimes.map((item, key) => (
            option += `<option key="${key}" value="${item}">${item}</option>`
        ))

        setTimeOptions(option);
    }, [prop.availableTimes]);

    const submitBookingForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        if (submitAPI(formData)) {
            navigate('/confirmed-booking');
        }
    }

    useEffect(() => {
        fetchTimeOptions();
    }, [fetchTimeOptions]);

    return (
        <form aria-label="booking form" style={{"display" : "grid", "maxWidth" : "200px", "gap": "20px"}} onSubmit={(e) => submitBookingForm(e)}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => updateStateData(setDate, e)} value={date} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => updateStateData(setTimes , e)} value={times} required>
                {parse(timeOptions)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => updateStateData(setNoOfGuest, e)} value={noOfGuest} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => updateStateData(setOccasion, e)} value={occasion} required>
                <option></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" className="button" />
        </form>
    );
}

export default BookingForm;