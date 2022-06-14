import { deleteBooking } from "../services/BookingsService";

const BookingsCard = ( { booking, removeBooking, changeGuestStatus }) => {

    const handleCheckIn = () => {
        changeGuestStatus(booking);
    };

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        });
    };

    return (
        <>
            <div className="booking-card">
                <h3><u>Name</u>: {booking.name}</h3>
                <p><u>Email</u>: {booking.email}</p>
                <div><u>Status</u>: { booking.status 
                                ? <div>Checked In<br/><button onClick={handleCheckIn} className="check-out-btn">Check Guest Out</button></div>
                                : <div>Not Checked In<br/><button onClick={handleCheckIn} className="check-in-btn">Check Guest In</button></div> 
                            }</div>
                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </>
    );
};

export default BookingsCard;