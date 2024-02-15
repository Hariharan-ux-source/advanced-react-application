import { useEffect, useState } from 'react';
import axios from 'axios';

function CheckStatus() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/services/getall');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleDelete = async (eventId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/services//${email}`);
            console.log('Event deleted successfully:', response.data);

            // Update the events list after deletion
            setEvents(events.filter(event => event.id !== eventId));
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleUpdate = async (eventId) => {
        // Add your update logic here
    };

    return (
        <div>
            <h1>Booked Events</h1>
            {events.length === 0 ? (
                <p>No events booked.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(event => (
                            <tr key={event.id}>
                                <td>{event.name}</td>
                                <td>{event.eventName}</td>
                                <td>{event.date}</td>
                                <td>{event.time}</td>
                                <td>
                                    <button onClick={() => handleDelete(event.id)}>Delete</button>
                                    <button onClick={() => handleUpdate(event.id)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default CheckStatus;
