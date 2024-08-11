import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // Import CSS file for styling

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch reservation data from the server
    axios.get('http://localhost:3000/api/v1/reservation/get')
      .then(response => {
        setReservations(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('There was an error fetching the reservations!');
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <div className="admin-container">
      <h1>Reservations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card-container">
          {reservations.length > 0 ? (
            reservations.map(reservation => (
              <div className="card" key={reservation._id}>
                <h2 className="card-title">{reservation.firstName} {reservation.lastName}</h2>
                <p><strong>Email:</strong> {reservation.email}</p>
                <p><strong>Contact:</strong> {reservation.contact}</p>
                <p><strong>Time:</strong> {reservation.time}</p>
                <p><strong>Date:</strong> {reservation.date}</p>
              </div>
            ))
          ) : (
            <p>No reservations found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
