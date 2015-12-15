import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/lib/card';
import {presentation as presentationStyle, presentationCard as cardStyle} from './style';
function PresentationCard({title, content}){
    return <div  style={cardStyle}><Card><CardTitle title={title}/><CardText>{content}</CardText></Card></div>;
}

function Presentation({kine, balneo, aquaBike}){
    return (
        <presentation style={presentationStyle}>
            <PresentationCard {...kine}/>
            <PresentationCard {...aquaBike}/>
            <PresentationCard {...balneo}/>
        </presentation>
    );
}

export default Presentation;
