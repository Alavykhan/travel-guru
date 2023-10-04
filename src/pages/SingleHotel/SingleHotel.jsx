import React from 'react';
import { Link } from 'react-router-dom';


const SingleHotel = ({hotel}) => {
    const {id, name, img, title, guest, wifi, rating, price}= hotel;



    
    return (
        <div className='text-white'>
                <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-md  rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className='py-2'>{title}</p>
                <Link to={`/hotels/${id}`}><button className="btn btn-warning">Booking</button></Link>
                </div>
                </div>
                </div>
                <div>
                </div>
        </div>
    );
};

export default SingleHotel;