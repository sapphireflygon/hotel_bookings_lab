import BookingsCard from './BookingsCard';
import React from 'react';

const BookingsList = ( {bookings, removeBooking} ) => {

    const listOfBookings = bookings.map((booking) => {
        return <BookingsCard booking={booking} key={booking._id} removeBooking={removeBooking} />
    });

    return (
        <>
            {listOfBookings}
        </>
    )
};

export default BookingsList;