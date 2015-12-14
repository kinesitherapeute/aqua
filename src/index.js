import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// data
const TITLE = 'Aqua kine sports';
import teamData from './data/team';
import cabinetData from './data/cabinet';
import presentationData from './data/presentation';

// render the app
ReactDOM.render(<App title={TITLE} team={teamData} cabinet={cabinetData} {...presentationData}/>, document.getElementById('root'));
