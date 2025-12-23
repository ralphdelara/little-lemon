import { useState } from 'react';

import BookingForm from './BookingForm';
import BookingFormConfirm from './BookingFormConfirm';

const BookingPage = (props) => {
    // this will control what form type will appear
    const [bookingFormType, setBookingFormType] = useState('reserve');
    //this will be the storage for formData
    const [bookingFormData, setBookingFormData] = useState({
        seating: 'Indoor seating',
        date: '',
        times: '',
        noOfDiners: '',
        occasion: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        specialRequests: '',
        agreePrivacyPolicy: false
    });

    if (bookingFormType === 'reserve') {
        document.title = props.appName + ' - Reservation';
    } else {
        document.title = props.appName + ' - Confirm Reservation';
    }

    return (
        <>
            <BookingForm {...props}
                bookingFormData={bookingFormData} bookingFormType={bookingFormType}
                setBookingFormData={setBookingFormData} setBookingFormType={setBookingFormType} />
            <BookingFormConfirm {...props}
                bookingFormData={bookingFormData} bookingFormType={bookingFormType}
                setBookingFormData={setBookingFormData} setBookingFormType={setBookingFormType} />
        </>
    );
}

export default BookingPage;