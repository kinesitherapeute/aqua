import React, { Component } from 'react';
import Team from './team'
import Cabinet from './cabinet'
import teamData from '../data/team'
import cabinetData from '../data/cabinet'
export default class Layout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className='layout'>
        <h1>{title}</h1>
        <Cabinet {...cabinetData} />
        <Team list={teamData}/>
      </div>
    );
  }
}
