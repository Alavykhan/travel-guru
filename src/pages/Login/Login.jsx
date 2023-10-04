import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignIn =(event)=>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validation
        if(!/(?=.*[A-Z]).*$/.test(password)){
            setError('your password need at least have a uppercase character')
            return toast.error('uppercase error')
        }else if(!/(?=.*[0-9]).*$/.test(password)){
            setError('your password need at least a number')
            return toast.error('number error')     
        }else if(!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
            setError('your password need a special character')
            return toast.error('special character error')
        }else if(password.length<8){
            setError('your password need at least eight character')
            return toast.error('8 character password')
        }


        login(email, password)
        .then(result=>{
            const signedIn = result.user;
            setError('')
            setSuccess('Successfully sign in')
            toast.success('Successfully sign in')
            console.log(signedIn)
            form.reset();
        })
        .catch(error=>{
            setError(error.message)
            console.log(error)
        })

    }


    return (
        <div>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <form onSubmit={handleSignIn} className="card flex-shrink-0 shadow-2xl bg-white p-10">
                <div className="card-body">
                    <h3 className='text-black text-3xl font-semibold'>Login</h3>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-warning">Login</button>
                    <p className='pt-5 text-black'>Don't have an account? <Link className='underline text-blue-700' to='/registration'>Create an account</Link></p>
                    </div>
                    <p className='text-red-500 font-semibold'>{error}</p>
                    <p className='text-green-500 font-semibold'>{success}</p>
                </div>
               <div className='text-center'>
               <hr />
                <p className='text-black'>Or</p>
                <hr />
               </div>
               <button className="btn btn-outline w-full mt-3 p-0 bg-white rounded-full text-black hover:bg-none"> 
               <img src="../../../public/images/icons/fb.png" className='w-8' alt="" />
               <span>Continue with Facebook</span>
               </button>
               <button className="btn btn-outline w-full mt-3 p-0 bg-white rounded-full text-black"> 
               <img src="../../../public/images/icons/google.png" className='w-8' alt="" />
               <span>Continue with Google</span>
               </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;