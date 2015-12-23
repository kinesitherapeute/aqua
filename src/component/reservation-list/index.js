import React from 'react';
import {List, ListItem} from 'material-ui/lib/lists';
import BikeIcon from 'material-ui/lib/svg-icons/maps/directions-bike';

function Reservation({begin, end, description, author, members, title, onSelect, Icon}){
    return (
        <div onClick={onSelect} >
            <ListItem primaryText={`${begin} - ${end}`} secondaryText={<p>{description}</p>} leftIcon={Icon}/>
        </div>);
}

function ReservationList({data = [], ReservationComponent = Reservation, onSelect}){
    return <List>{data.map( (reservation = {}, idx) => <ReservationComponent key={idx} onSelect={onSelect} Icon={<BikeIcon/>} {...reservation} />)}</List>
}


function ReservationComplete({onFilter = s => console.log(s ), ...otherProps}){
    console.log('res', otherProps)
    return (
        <div>
            <input type='date' onChange={onFilter} />
            <ReservationList {...otherProps}/>
        </div>
    );
}

export default ReservationComplete;
