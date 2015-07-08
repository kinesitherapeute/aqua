import React, { Component } from 'react';
//import Container from '../component/container';
//import Block from '../component/block';
let style = {className: 'team', backgroundColor: "tomato"};
let memberStyle= {className: 'member'};
import Block from '../component/block';
export default class Team extends Component {
  render() {
    let {list} = this.props;
    return (
     <div style={style} title='Equipe' subTitle='Aqua Kine sport team'>
         {
           list.map((member)=>{
             let {firstName, lastName, photo, skills, id} = member;
             return (
               <Block style={memberStyle} title={`${firstName} ${lastName}`} key={id}>
                <img src={photo}/>
                <p>{skills}</p>

               </Block>
                           );
           })
        }
        </div>
    );
  }
}
