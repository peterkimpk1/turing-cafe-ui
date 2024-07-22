import Card from "./Card"
import './Reservation.css'
export default function Reservation({reservations,cancelReservation}) {
    const cardReservations = reservations.map(({id, name, date, time, number}) => {
        return (
            <Card
            key={id}
            id={id}
            name={name}
            date={date}
            time={time}
            number={number}
            cancelReservation={cancelReservation}
            />
        )
    })
    return (
      <div className='resy-container'>
        {cardReservations}
      </div>
    )
}