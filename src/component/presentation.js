import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/lib/card';
import {presentation as presentationStyle, presentationCard as cardStyle} from './style';
function PresentationCard({title, content}){
    return <div><Card style={{height: '100%'}}><CardTitle title={title}/><CardText>{content}</CardText></Card></div>;
}

function Presentation({kine, balneo, aquaBike}){
    return (
        <presentation>
            <PresentationCard {...kine}/>
            <PresentationCard {...aquaBike}/>
            <PresentationCard {...balneo}/>
        </presentation>
    );
}

export default Presentation;
