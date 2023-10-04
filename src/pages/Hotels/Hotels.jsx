import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleHotel from '../SingleHotel/SingleHotel';

const Hotels = () => {
    const hotels = useLoaderData();
    return (
        <div className='my-10'>
            {
                hotels.map(hotel=><SingleHotel
                id={hotel.id}
                hotel={hotel}></SingleHotel>)
            }
        </div>
    );
};

export default Hotels;