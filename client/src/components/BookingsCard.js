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
                <h3>Name: {booking.name}</h3>
                <p>Email: {booking.email}</p>
                <div>Status: { booking.status 
                                ? <div>Checked In<button onClick={handleCheckIn}>Check Guest Out</button></div>
                                : <div>Not Checked In<button onClick={handleCheckIn}>Check Guest In</button></div> 
                            }</div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    );
};

export default BookingsCard;