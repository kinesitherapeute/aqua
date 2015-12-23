import React, { Component } from 'react';
import {connect } from 'react-redux';
import StaticSite from './component/static-site';
import ReservationList from './component/reservation-list';
import {setCurrentReservation} from './actions/reservations';
function Static({ staticSite}){
    return <StaticSite {...staticSite}/>;
}

export const StaticApp =  connect(({staticSite}) => {
    return {staticSite}
})(Static)

export default function App({children}){return <div data-kine='app'>{children}</div>}
export const ReservationApp = connect(
    ({reservations}) => {return {data: reservations}; },
    ({dispatch}) => {return {onSelect: () => { dispatch(setCurrentReservation)} }; }
)(ReservationList)
