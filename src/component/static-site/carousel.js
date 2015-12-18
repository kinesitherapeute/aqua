import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export default function CarouselAqua(){
    return (
        <Carousel type="slider" showControls={true} showStatus={true}>
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
            <img src='http://lorempixel.com/400/200' />
        </Carousel>

    );
}
