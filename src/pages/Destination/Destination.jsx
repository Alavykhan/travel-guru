import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EachDestination from '../EachDestination/EachDestination';

const Destination = () => {
const places = useLoaderData();
console.log(places)
    return (
        <div className='my-10'>
         {
            places.map(place=><EachDestination
            kew={place.id}
            place={place}></EachDestination>)
         }
        </div>
    );
};

export default Destination;