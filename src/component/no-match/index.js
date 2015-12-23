import React from 'react';
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
}

const contentStyle= {
    backgroundColor: 'tomato',
    fontSize: '20pt',
    color: 'yellow',
    width: '50%',
    height: '100%',
    textAlign: 'center'
}

export default function NoMatch(){
    return <div style={style}><div style={contentStyle}>404 La page demandée n'existe pas</div></div>
}
