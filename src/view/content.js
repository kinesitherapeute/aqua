import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className='mdl-layout__content'>
        {this.props.children}
      </div>
    );
  }
}
