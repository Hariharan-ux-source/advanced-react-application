import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [name, setName] = useState('');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:8080/services/${email}`, {
        headers: {
          "Authorization": Bearer ${token},
          "cache-control": 'no-cache',
        }
      });
      alert('Booking deleted successfully!');
      setName('');
    } catch (error) {
      console.log(error);
      alert('Failed to delete booking.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name to delete"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Delete;