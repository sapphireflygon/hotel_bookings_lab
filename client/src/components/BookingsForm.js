import React, { useState } from 'react';
import { postBooking } from '../services/BookingsService';

const BookingsForm = ( {addBooking} ) => {

    // state? newBookingStatus
    const [formData, setFormData] = useState({});


    // functions to write: handleStatusChange

    // postBooking and addBooking to be written in service/container respectively???

    

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmitForm} >
                <h2>Add a New Booking</h2>
                <label htmlFor='name'>Name: </label>
                    <input type='text' onChange={onChange} id="name" placeholder="Guest name here..." required/>
                <label htmlFor='email'>Email: </label>
                    <input type='text' onChange={onChange} id="email" placeholder="Guest's email address here..." required/>
                {/* <label htmlFor='status' name="radio-buttons" value={newBookingStatus ? "true" : "false"}>Checked in?</label>
                    <input name="radio-buttons" type="radio" value="true" onChange={handleStatusChange}/> Yes
                    <input name="radio-buttons" type="radio" value="false" onChange={handleStatusChange}/> No */}
                <input type="submit" value="Save New Booking" id="save-button"/>
            </form>
        </>
    )
};

export default BookingsForm;