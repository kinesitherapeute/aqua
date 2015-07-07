import React, { Component } from 'react';
export default class Layout extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className='layout'>
      <h1>{title}</h1>
      </div>
    );
  }
}
