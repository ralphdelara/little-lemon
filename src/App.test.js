import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router';
import { fetchAPI, submitAPI } from './js/api';

test('Check Booking Form validation attributes', () => {
  render(
        <MemoryRouter>
          <BookingForm availableTimes={['12:00', '13:00']} />
        </MemoryRouter>
  );
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('required');

  const timeInput = screen.getByLabelText('Choose time');
  expect(timeInput).toHaveAttribute('required');

  const noOfGuestInput = screen.getByLabelText('Number of guests');
  expect(noOfGuestInput).toHaveAttribute('required');
  expect(noOfGuestInput).toHaveAttribute('min', '1');
  expect(noOfGuestInput).toHaveAttribute('max', '10');

  const occasionInput = screen.getByLabelText('Occasion');
  expect(occasionInput).toHaveAttribute('required');
});