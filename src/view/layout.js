import React, { Component } from 'react';
import Header from './header';
import Drawer from './drawer';
import Content from './content';

import Team from './team'
import Cabinet from './cabinet'
import teamData from '../data/team'
import cabinetData from '../data/cabinet'
export default class Layout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <Header />
        <Drawer/>
        <Content>
          <h1>{title}</h1>
          <Cabinet {...cabinetData} />
          <Team list={teamData}/>
        </Content>
      </div>
    );
  }
}
