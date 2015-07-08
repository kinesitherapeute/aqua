import React, { Component } from 'react';
import Header from './header';
import Banner from './drawer';
import Content from './content';

import Team from './team'
import Cabinet from './cabinet'
import teamData from '../data/team'
import cabinetData from '../data/cabinet'
export default class Layout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className='layout'>
        <Header />
        <Banner>

        </Banner>
        <Content>
          <Cabinet {...cabinetData} />
        </Content>
        <Content>
          <h1>{title}</h1>
          <Team list={teamData}/>
        </Content>
      </div>
    );
  }
}
