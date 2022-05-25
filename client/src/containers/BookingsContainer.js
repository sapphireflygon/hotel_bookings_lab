// addBooking function to be exported to BookingsForm.js
import React, { useEffect, useState } from "react";
import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";
import { getBookings } from "../services/BookingsService";

const BookingsContainer = () => {

    const [hotelBookings, setHotelBookings] = useState([]);

    useEffect(()=>{
        getBookings().then((allBookings) => {
            setHotelBookings(allBookings);
        });
    }, []);

    const addBooking = (newBooking) => {
        const copyArray = hotelBookings.map( (b)=> b );
        copyArray.push(newBooking);
        setHotelBookings(copyArray);
    };

    const removeBooking = (id) => {
        const copyArray = hotelBookings.map((b)=> b);
        const indexToDelete = copyArray
                                .map((b)=> b._id)
                                .indexOf(id);
        copyArray.splice(indexToDelete, 1);
        setHotelBookings(copyArray);
    };

    return(
        <>
            <h4> This is the bookings container</h4>
            <BookingsForm addBooking={addBooking} />
            <BookingsList bookings={hotelBookings} removeBooking={removeBooking} />
        </>
    )
}

export default BookingsContainer;