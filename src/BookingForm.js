import { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';

const BookingForm = (props) => {
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
            <div class="seating">
                <label className="radio" htmlFor="indoor">Indoor seating
                    <input type="radio" name="seating" id="indoor" onChange={(e) => updateStateData(setSeating, e)} value="indoor" checked={seating === 'indoor'} required />
                </label>
            </div>
            <div class="seating">
                <label className="radio" htmlFor="outdoor">Outdoor seating
                    <input type="radio" name="seating" id="outdoor" onChange={(e) => updateStateData(setSeating, e)} value="outdoor" checked={seating === 'outdoor'} required />
                </label>
            </div>
            <div>
                <label htmlFor="res-date">Date</label>
                <input type="date" id="res-date" onChange={(e) => updateStateData(setDate, e)} value={date} required />
            </div>
            <div>
                <label htmlFor="guests">Number of Diners</label>
                <select id="guests" onChange={(e) => updateStateData(setNoOfGuest, e)} value={noOfGuest} required>
                    <option value="">No. of Diners</option>
                    {
                        Array.from({length: 10}, (_, i) => (
                            <option key={i} value={i++}>{i++}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => updateStateData(setOccasion, e)} value={occasion} required>
                    <option value="">Occasion</option>
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
                <select id="res-time" onChange={(e) => updateStateData(setTimes, e)} value={times} required>
                    {parse(timeOptions)}
                </select>
            </div>
        </div>
    );
}

export default BookingForm;