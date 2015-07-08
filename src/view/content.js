import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className='container'>
        <div className='section'>
          <div className='row'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
