// addBooking function to be exported to BookingsForm.js
import React, { useEffect, useState } from "react";
import BookingsForm from "../components/BookingsForm";
import BookingsList from "../components/BookingsList";
import { getBookings, updateBooking } from "../services/BookingsService";

const BookingsContainer = () => {

    const [hotelBookings, setHotelBookings] = useState([]);

    useEffect(()=>{
        getBookings().then((allBookings) => {
            setHotelBookings(allBookings);
        });
    }, [hotelBookings]);

    const changeGuestStatus = (booking) => {
        const newBookingStatus = booking;
        newBookingStatus["status"] = !booking.status;
        // console.log(updatedBooking)
        updateBooking(newBookingStatus, newBookingStatus._id)
        // copy hotelBookings, get indexOf old booking, replace old with new, setHotelBookings to newArr
        const newArr = [...hotelBookings];
        const indexOfOldBooking = newArr.indexOf(booking);
        const updatedArr = newArr.splice(indexOfOldBooking, 1, newBookingStatus);
        setHotelBookings(updatedArr);
    };
    
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
            <div className="booking-form-container">
            <div className="booking-form">
            <BookingsForm addBooking={addBooking} />
            </div>
            </div>
            <div className="booking-list">
            <BookingsList bookings={hotelBookings} removeBooking={removeBooking} changeGuestStatus={changeGuestStatus} />
            </div>
            
        </>
    )
}

export default BookingsContainer;