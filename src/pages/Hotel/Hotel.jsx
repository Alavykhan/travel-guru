import React from 'react';

const Hotel = ({hotels}) => {
    const {name, img, title, guest, wifi, rating, price}= hotels;
    return (
        <div>
                    <div className='text-white'>
                <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-md  rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className='py-2'>{title}</p>
                <p className='py-2'>{guest}</p>
                <p className='py-2'>{wifi}</p>
                <p className='py-2'>{rating}</p>
                <p className='py-2'>Price: {price}</p>
                </div>
                </div>
                </div>
                <div>
                </div>
        </div>
        </div>
    );
};

export default Hotel;