import React from 'react';
import {List, ListItem} from 'material-ui/lib/lists';
import BikeIcon from 'material-ui/lib/svg-icons/maps/directions-bike';
import PhoneIcon from 'material-ui/lib/svg-icons/communication/phone';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';

function Contact({name, phone, photo, address}){
    const {number, street} = address;
    return (
        <List>
          <ListItem primaryText={name}  leftIcon={<BikeIcon />}/>
          <ListItem primaryText={phone} leftIcon={<PhoneIcon />} />
          <ListItem primaryText={`${number} ${street}`}  leftIcon={<HomeIcon/>} />
        </List>
    );
}

function Map(){
    return <div>MAP</div> //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.34849950635!2d3.0902023159123186!3d50.59642948471627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d42ad9d72d67%3A0x59235d7d4f50ff9c!2sBesson+Ansart+Jacques!5e1!3m2!1sfr!2sfr!4v1450127012467" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
}

export default function ContactUs({informations, map}){
    return (
        <div >
            <Contact {...informations}/>
            <Map />
        </div>
    );
}
