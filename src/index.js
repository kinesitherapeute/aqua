import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// data
const TITLE = 'Aqua kine sports';
const intro= 'Bienvenue chez Aqua Kine sport......................'
import teamData from './data/team';
import cabinetData from './data/cabinet';
import presentationData from './data/presentation';

// render the app
ReactDOM.render(<App title={TITLE} intro={intro} team={teamData} cabinet={cabinetData} {...presentationData}/>, document.getElementById('root'));
