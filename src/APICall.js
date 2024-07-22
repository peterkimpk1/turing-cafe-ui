export  function getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
}

export function postReservation(reservation) {
   return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(reservation)
   })
   .then(res => res.json())
}

export function deleteReservation(id) {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
    })
}