import React, { Component } from 'react';

export default class Block extends Component {
  render() {
    let {style} = this.props;
    return (
      <div style={style} className={`col s12 m4 ${style.className}`}>
        <div className="icon-block">
          <h2 className="center brown-text"><i className={this.props.icon}>{this.props.title}</i></h2>
          <h5 className="center">{this.props.subTitle}</h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}
