import React, { Component } from 'react';

export default class Block extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className={this.props.icon}>{this.props.title}</i></h2>
          <h5 className="center">{this.props.subTitle}</h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}
