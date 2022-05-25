import { deleteBooking } from "../services/BookingsService";

const BookingsCard = ( { booking, removeBooking }) => {

    const handleCheckIn = (booking) => {
        return !booking.status
    }

    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking._id)
        })
    }

    return (
        <>
            <div className="booking-card">
                <h3>Name: {booking.name}</h3>
                <p>Email: {booking.email}</p>
                <p>Status: { booking.status 
                                ? "Checked In" 
                                : <div>Not Checked In<button onClick={handleCheckIn}>Check Guest In</button></div> }</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default BookingsCard;