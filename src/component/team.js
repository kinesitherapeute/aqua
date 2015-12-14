import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/lib/card';
import {presentation as style} from './style';
function Member({firstName, lastName, skills, photo, content}){
    return (
        <Card>
            <CardMedia overlay={<CardTitle title={`${firstName} ${lastName}`} subtitle={skills}/>}>
                <img src={photo}/>
            </CardMedia>
        </Card>
    );
}

function Team({members}){
    return (
        <ul style={style}>
            {members.map((member) => <Member {...member} />)}
        </ul>
    );
}

export default Team;
