import {RESERVATION_ADD, RESERVATION_REMOVE} from './constants';

export function addReservation(reservation){
    return {payload: reservation, type: RESERVATION_ADD};
}
export function removeReservation(reservationId){
    return {payload: reservationId, type: RESERVATION_REMOVE};
}
