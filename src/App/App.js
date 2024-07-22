import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {getReservations, postReservation, deleteReservation} from '../APICall';
import Form from '../Form'
import Reservation from '../Reservation';
function App() {
  const [reservations, setReservation] = useState([]);
  const [error, setError] = useState('')
  useEffect(() => {
    getReservations()
    .then(data => { 
      setReservation(data)})
    .catch(err => setError(err))
  },[])
  function addReservation(newReservation) {
    postReservation(newReservation)
    .then(data => {
      setReservation([...reservations,data])
    })
    .catch(err => setError(err))
  }
  function cancelReservation(id) {
    deleteReservation(id)
    .then(res => {
      const filteredReservations = reservations.filter(reservation => reservation.id !== id);
      setReservation(filteredReservations)
      res.json()})
    .catch(err => setError(err))

  }
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <Reservation reservations={reservations} cancelReservation={cancelReservation}/>
      {error && <h2>{error}</h2>}
    </div>
  );
}

export default App; 