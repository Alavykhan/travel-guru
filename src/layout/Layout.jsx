import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import background_img from '../../public/images/Rectangle1.png'
import './Layout.css';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div className='min-h-screen relative bg-cover bg-center flex justify-center' style={{ backgroundImage: `url(${background_img})`}}>
           <div className='bg-layer'> 
           <Header/>
            <Outlet/>
           </div>
           <Toaster></Toaster>
        </div>
    );
};

export default Layout;