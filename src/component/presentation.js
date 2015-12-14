import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/lib/card';
import {presentation as style} from './style';
function PresentationCard({title, content}){
    return <Card><CardTitle title={title}/><CardText>{content}</CardText></Card>;
}

function Presentation({kine, balneo, aquaBike}){
    return (
        <presentation style={style}>
            <PresentationCard {...kine}/>
            <PresentationCard {...balneo}/>
            <PresentationCard {...aquaBike}/>
        </presentation>
    );
}

export default Presentation;
