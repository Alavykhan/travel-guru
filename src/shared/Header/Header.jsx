import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch} from "@react-icons/all-files/fa/FaSearch";
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout=()=>{
        logout()
        .then()
        .catch(error=>console.log(error))
    }

    return (
        <div className='flex justify-between items-center px-32 pt-4 text-white'>
            <div>
                <Link to='/'><img src="/w-logo.png" className='w-32 ' alt="" /></Link>
            </div>
            <form className='flex items-center rounded border border-white px-5 '>
                <FaSearch/>
                <input type="text" className='py-3 outline-none pl-3  bg-transparent' placeholder='Search your Destination' />
            </form>
            <nav className='flex justify-center items-center gap-3'>
                <Link  to='/'>Home</Link>
                <Link  to='/destination'>Destination</Link>
                <Link  to=''>Blog</Link>
                <Link  to=''>Contact</Link>
                {user && <p className='font-semibold underline'>{user.displayName}</p> }
                {
                    user? <button onClick={handleLogout} className="btn btn-warning">Logout</button>: <Link to='/login'><button className="btn btn-warning">Login</button></Link>
                }
            </nav>
        </div>
    );
};

export default Header;