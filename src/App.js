import React, { Component } from 'react';
import {connect } from 'react-redux';
import StaticSite from './component/static-site';

function ReservationList(){
    return <div>reservations</div>
}

function Static({ staticSite}){
    return <StaticSite {...staticSite}/>;
}

export const StaticApp =  connect(({staticSite}) => {
    return {staticSite}
})(Static)

export default function App({children}){return <div data-kine='app'>{children}</div>}
export const ReservationApp = connect(
    ({}) =>{ return {doto: 'aaaa'};
})(ReservationList)
