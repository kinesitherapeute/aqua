import React from 'react';
import {List, ListItem} from 'material-ui/lib/lists';
import BikeIcon from 'material-ui/lib/svg-icons/maps/directions-bike';

function Reservation({begin, end, description, author, members, title, onSelect, Icon}){
    return <ListItem primaryText={`${begin} - ${end}`} secondaryText={<p>{description}</p>} leftIcon={Icon}/>;
}

function ReservationList({data = [], ReservationComponent = Reservation, onSelectReservation}){

    return <List>{data.map( (reservation = {}, idx) => <ReservationComponent key={idx} onSelect={onSelectReservation} Icon={<BikeIcon/>} {...reservation} />)}</List>
}


function ReservationComplete(props){
    console.log('res', props)
    return <ReservationList {...props}/>
}

export default ReservationComplete;
