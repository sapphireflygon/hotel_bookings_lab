import BookingsCard from './BookingsCard';
import React from 'react';

const BookingsList = ( {bookings, removeBooking, changeGuestStatus} ) => {

    const listOfBookings = bookings.map((booking) => {
        return <BookingsCard booking={booking} key={booking._id} removeBooking={removeBooking} changeGuestStatus={changeGuestStatus}/>
    });

    return (
        <>
            {listOfBookings}
        </>
    )
};

export default BookingsList;