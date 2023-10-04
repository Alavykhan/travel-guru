import React from 'react';
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="h-fit px-32 text-white">
                <div className="my-48 grid grid-cols-2 items-center gap-10">
                <div className='pr-20'>
                    <h1 className="text-5xl font-bold">Start Journey with Travel Guru</h1>
                    <p className="py-6">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, ship or other means, with or without luggage.</p>
                    <Link to='/destination'><button className="btn btn-warning">See Destination <BsArrowRight/></button></Link>
                </div>
                   <div className='flex lg:flex-row-reverse gap-3'>
                   <img src="/images/Sajek.png" className="w-60 h-80 rounded-lg shadow-2xl" />
                    <img src="/images/Sreemongol.png" className="w-60 h-80 rounded-lg shadow-2xl" />
                    <img src="/images/sundorbon.png" className="w-60 h-80 rounded-lg shadow-2xl" />
                   </div>
                </div>
                </div>
        </div>
    );
};

export default Home;