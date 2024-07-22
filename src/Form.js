import { useState } from "react"
import './Form.css'
export default function Form({addReservation}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guest, setGuest] = useState('');
    function submitForm(e) {
        e.preventDefault();
        const reservation = {
            name: name,
            date: date,
            time: time,
            number: guest,
            id: Date.now()
        }
        addReservation(reservation)
    }
    return (
        <div className='resy-form'>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input placeholder='Date (mm/dd)' value={date} onChange={(e) => setDate(e.target.value)}></input>
            <input placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)}></input>
            <input placeholder='Number of guests' value={guest} onChange={(e) => setGuest(e.target.value)}></input>
            <button onClick={submitForm}>Make Reservation</button>
        </div>

    )
}