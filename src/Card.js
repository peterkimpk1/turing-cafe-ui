import './Card.css'
export default function Card({id, name, date, time, guest, cancelReservation}) {
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {guest}</p>
            <button onClick={() => cancelReservation(id)}>Cancel</button>
        </div>
    )
}