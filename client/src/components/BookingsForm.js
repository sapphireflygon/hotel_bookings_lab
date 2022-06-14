import React, { useState } from 'react';
import { postBooking } from '../services/BookingsService';

const BookingsForm = ( {addBooking} ) => {

    const [formData, setFormData] = useState({});

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
                    <input type='email' onChange={onChange} id="email" placeholder="example@email.com" required/>
                
                <input type="submit" value="Save New Booking" id="save-button"/>
            </form>
        </>
    )
};

export default BookingsForm;