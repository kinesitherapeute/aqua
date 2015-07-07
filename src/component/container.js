import React, { Component } from 'react';

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <!--   Icon Section   -->
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
