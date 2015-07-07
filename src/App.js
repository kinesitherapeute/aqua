import React, { Component } from 'react';
import Layout from './view/layout'
export default class App extends Component {
  render() {
    let title = this.props.title;
    return (
      <Layout title={title}/>
    );
  }
}
