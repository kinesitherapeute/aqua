import React, { Component } from 'react';
//import Layout from './view/layout'
import 'react-responsive-carousel/styles/carousel.css';
import AppBar from 'material-ui/lib/app-bar';
import Presentation from './component/presentation';
import Team from './component/team';
import Contact from './component/contact';

import {app as style} from './style';
export default function App({title, kine, balneo, aquaBike, team, cabinet}){
    return (
        <div style={style}>
            <AppBar title={`${title} lol`}/>

            <h2>Présentation</h2>
            <Presentation kine={kine} balneo={balneo} aquaBike={aquaBike}/>

            <h2>L'équipe</h2>
            <Team members={team} />

            <h2>Contact</h2>
            <Contact informations={cabinet}/>
        </div>
    );
}
