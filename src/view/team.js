import React, { Component } from 'react';
import Container from '../component/container';
import Block from '../component/block';
let style = {className: 'team'};
let memberStyle= {className: 'member'};

export default class Team extends Component {
  render() {
    let {list} = this.props;
    return (
    <Container>
     <Block style={style} title='Equipe' subTitle='Aqua Kine sport team'>
         {
           list.map((member)=>{
             let {firstName, lastName, photo, skills, id} = member;
             return (
               <div style={memberStyle} key={id}>
                <img src={photo}/>
                <span>{firstName} {lastName}</span>
                <p>{skills}</p>
               </div >
             );
           })
        }
        </Block>
      </Container>
    );
  }
}
