import React, { Component } from 'react';
//import Layout from './view/layout'
import Presentation from './presentation';
import Team from './team';
import Contact from './contact';
import Header from './header';
import Intro from './intro';
export default function StaticSite({title, intro, kine, balneo, aquaBike, team, cabinet}){
    return (
        <div>
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
