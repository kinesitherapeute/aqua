import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/lib/card';
import {presentation as teamStyle, presentationCard as cardStyle} from './style';
function Member({firstName, lastName, skills, photo, content}){
    return (
        <div style={cardStyle}>
            <Card>
                <CardMedia overlay={<CardTitle title={`${firstName} ${lastName}`} subtitle={skills}/>}>
                    <img src={photo}/>
                </CardMedia>
            </Card>
        </div>
    );
}

function Team({members}){
    return (
        <div style={teamStyle}>
            {members.map((member) => <Member {...member} />)}
        </div>
    );
}

export default Team;
