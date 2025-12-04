import {useReducer} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {fetchAPI} from './js/api';

const Main = () => {
    const initializeTimes = fetchAPI(new Date());
    const updateTimes = (stateData, valueToCompare) => {
        return fetchAPI(new Date(valueToCompare));
    };

    const [availableTimes , setAvailableTimes] = useReducer(updateTimes, initializeTimes);

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/Reservation" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}  />}></Route>
                    <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default Main;