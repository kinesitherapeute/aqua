import React, { Component } from 'react';
import Team from './team'
import teamData from '../data/team'
export default class Layout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className='layout'>
        <h1>{title}</h1>
        <Team list={teamData}/>
      </div>
    );
  }
}
