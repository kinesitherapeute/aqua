import React, { Component } from 'react';
import {connect } from 'react-redux';
import StaticSite from './component/static-site';

function ReservationList(){
    return <div>reservations</div>
}

function App({isStaticSite, staticSite}){
    return isStaticSite ? <StaticSite {...staticSite}/> : <ReservationList />;
}

export default connect(({isStaticSite = true, staticSite}) => {
    console.log({staticSite, isStaticSite}, 'HHHHHHHHHHHHHHHHHHHHHHHHH')
    return {staticSite, isStaticSite}
})(App)
