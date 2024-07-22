import './Card.css'
export default function Card({id, name, date, time, number, cancelReservation}) {
    return (
        <div key={id} className='card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button onClick={() => cancelReservation(id)}>Cancel</button>
        </div>
    )
}