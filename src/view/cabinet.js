import React, { Component } from 'react';
export default class Layout extends Component {
  render() {
    let { address, name,phone ,map, photo} = this.props;
    return (
      <div className='cabinet'>
        <div className='information'>
          <label>Etablissement: </label><span>{name}</span>
          <label>Telephone: </label><span>{phone}</span>
          <img src={photo}/>
          <div className='address'>
            <span>{address.number}</span>
            <span>{address.street}</span>
          </div>
          <div className="map">{map}</div>
        </div>
      </div>
    );
  }
}
