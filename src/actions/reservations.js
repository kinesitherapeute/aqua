import {RESERVATION_ADD, RESERVATION_REMOVE, RESERVATION_CURRENT_SET} from './constants';

export function addReservation(reservation){
    return {payload: reservation, type: RESERVATION_ADD};
}
export function removeReservation(reservationId){
    return {payload: reservationId, type: RESERVATION_REMOVE};
}

export function setCurrentReservation(reservationId){
    return {payload: reservationId, type: RESERVATION_CURRENT_SET};
}
