import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import getReservations from '../APICall';
import Form from '../Form'
import Reservation from '../Reservation';
function App() {
  const [reservations, setReservation] = useState([]);
  const [error, setError] = useState('')
  useEffect(() => {
    getReservations()
    .then(data => { 
      console.log(data)
      setReservation(data)})
    .catch(err => setError(err))
  },[])
  function addReservation(newReservation) {
    setReservation([...reservations,newReservation])
  }
  function cancelReservation(id) {
    const filteredReservations = reservations.filter(reservation => reservation.id !== id);
    setReservation(filteredReservations)
  }
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <Reservation reservations={reservations} cancelReservation={cancelReservation}/>
    </div>
  );
}

export default App; 