import React, { Component } from 'react';
//import Layout from './view/layout'
import Presentation from './component/presentation';
import Team from './component/team';
import Contact from './component/contact';
import Header from './component/header';
import Intro from './component/intro';
import {app as style} from './style';
export default function App({title, intro, kine, balneo, aquaBike, team, cabinet}){
    return (
        <div style={style}>
            <Header>{`${title} lol`}</Header>
            <section data-kine='content'>
                <Intro title={title} content={intro}>
                    <Presentation kine={kine} balneo={balneo} aquaBike={aquaBike}/>
                </Intro>

                <h2>L'équipe</h2>
                <Team members={team} />

                <h2>Contact</h2>
                <Contact informations={cabinet}/>
            </section>
        </div>
    );
}
