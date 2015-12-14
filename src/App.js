import React, { Component } from 'react';
//import Layout from './view/layout'

import AppBar from 'material-ui/lib/app-bar';
import Presentation from './component/presentation';

export default function App({title, kine, balneo, aquaBike}){
    return (
        <app>
            <AppBar title={`${title} lol`}/>
            

            <h2>Présentation</h2>
            <Presentation kine={kine} balneo={balneo} aquaBike={aquaBike}/>

            <h2>L'équipe</h2>

            <h2>Contact</h2>

        </app>
    );
}
