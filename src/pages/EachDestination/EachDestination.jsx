import React from 'react';
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from 'react-router-dom';
const EachDestination = ({place}) => {
    const {id, title, img, description}= place
    return (
        <div className='text-white'>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">{description}</p>
                <Link to={`/destination/${id}`}><button className="btn btn-warning">Hotels <BsArrowRight/></button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EachDestination;