import './App.css';
import React from 'react';
import Form from '../Form'
import { useState } from 'react';
function App() {
  const [reservation, setReservation] = useState([]);
  function addReservation(newReservation) {
    setReservation([...reservation,newReservation])
  }
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 