import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle, CardActions} from 'material-ui/lib/card';
import PhoneIcon from 'material-ui/lib/svg-icons/communication/screen-share';


function PresentationCard({title, content, action}){
    return <div><Card ><CardTitle title={title}/><CardMedia overlay={<CardTitle subtitle={content}><PhoneIcon /></CardTitle>}><img src='http://lorempixel.com/400/200/people/'/></CardMedia><CardActions><button>hi</button></CardActions></Card></div>;
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
