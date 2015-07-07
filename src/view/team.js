import React, { Component } from 'react';
export default class Layout extends Component {
  render() {
    let { list } = this.props;
    return (
      <ul className='team'>
        {list.map((member)=>{
          let {firstName, lastName, photo, skills} = member;
          return (
            <li>
              <img src={photo}/>
              <span>{firstName} {lastName}</span>
              <p>
                {skills}
              </p>
            </li>
          )
        })}
      </ul>
    );
  }
}
