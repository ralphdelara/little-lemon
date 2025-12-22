import { useReducer } from 'react';
import { Routes, Route } from 'react-router';

import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Error404 from './Error404';
import { fetchAPI } from './js/api';
import heroBg from './img/hero-bg.png';

const Main = () => {
    const initializeTimes = fetchAPI(new Date());
    const updateTimes = (stateData, valueToCompare) => {
        return fetchAPI(new Date(valueToCompare));
    };

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage heroBg={heroBg} />} />
                <Route path="/reservation" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} heroBg={heroBg} />} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
                <Route path="*" element={<Error404 heroBg={heroBg} />} />
            </Routes>
        </main>
    );
}

export default Main;