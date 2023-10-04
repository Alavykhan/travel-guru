import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const NewHotels = () => {
    const newHotels = useLoaderData();
    console.log(newHotels);
    return (
        <div>
            {
            newHotels.map(hotels=><Hotel
            key={hotels.id}
            hotel={hotels}></Hotel>)
            }
        </div>
    );
};

export default NewHotels;