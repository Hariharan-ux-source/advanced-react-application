import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingComponent = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    eventname: '',
    email: '',
    date: '',
    timing: '',
    people: 0
  });
  const [updatingBookingId, setUpdatingBookingId] = useState(null); // State to track which booking is being updated

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const email = localStorage.getItem('email');
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:8080/book/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setBookings([]);
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://127.0.0.1:8080/book/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateBooking = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://127.0.0.1:8080/book', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const handleUpdateBooking = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://127.0.0.1:8080/book/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBookings();
      setUpdatingBookingId(null); // Reset updatingBookingId after successful update
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const handleStartUpdating = (id) => {
    const bookingToUpdate = bookings.find(booking => booking.id === id);
    setFormData({ ...bookingToUpdate });
    setUpdatingBookingId(id);
  };

  return (
    <div>
      <div>
        <h2>Create Booking</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleFormChange} />
        <input type="text" name="eventname" placeholder="Event Name" value={formData.eventname} onChange={handleFormChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleFormChange} />
        <input type="date" name="date" value={formData.date} onChange={handleFormChange} />
        <input type="time" name="timing" value={formData.timing} onChange={handleFormChange} />
        <input type="number" name="people" placeholder="Number of People" value={formData.people} onChange={handleFormChange} />
        <button onClick={handleCreateBooking}>Create</button>
      </div>
      {Array.isArray(bookings) && bookings.map((booking) => (
        <div key={booking.id}>
          <h2>Update Booking</h2>
          <p>Name: {booking.name}</p>
          <p>Email: {booking.email}</p>
          <p>Address: {booking.address}</p>
          <p>Event Name: {booking.eventname}</p>
          <p>Date: {booking.date}</p>
          <p>Timing: {booking.timing}</p>
          <p>People: {booking.people}</p>
          {/* Display other booking details */}
          {updatingBookingId === booking.id ? (
            <>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleFormChange} />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleFormChange} />
              <input type="text" name="eventname" placeholder="Event Name" value={formData.eventname} onChange={handleFormChange} />
              <input type="date" name="date" value={formData.date} onChange={handleFormChange} />
              <input type="time" name="timing" value={formData.timing} onChange={handleFormChange} />
              <input type="number" name="people" placeholder="Number of People" value={formData.people} onChange={handleFormChange} />
              <button onClick={() => handleUpdateBooking(booking.id)}>Update</button>
            </>
          ) : (
            <>
              <button onClick={() => handleStartUpdating(booking.id)}>Edit</button>
              <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingComponent;
