import Card from "./Card"
import './Reservation.css'
export default function Reservation({reservations,cancelReservation}) {
    const cardReservations = reservations.map(({id, name, date, time, guest}) => {
        return (
            <Card
            id={id}
            name={name}
            date={date}
            time={time}
            guest={guest}
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