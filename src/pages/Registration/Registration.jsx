import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/Provider/AuthProvider';
import toast from 'react-hot-toast';


const Registration = () => {
    const {createUser,}= useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleReg =(event)=>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        // validation

        if(!/(?=.*[A-Z]).*$/.test(password)){
            setError('Use at least one uppercase latter')
           return toast.error('uppercase error')
        }else if(!/(?=.*[0-9]).*$/.test(password)){
            setError('Use at least one number')
            return toast.error('number error')
        }else if(!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
            setError('Use at least one special character')
            return toast.error('special character error')
        }else if(password.length<8){
            setError('your password should be 8 character')
            return  toast.error('minimum character error')
        }else if(!(password == confirm)){
            setError('your password are not matched')
          return  toast.error('not matched')
        }


        createUser(email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess("You've created an account")
            setError('')
            toast.success('Successfully Register')
            setTimeout(()=>{navigate('/'), 2000})

            // updateUser(name)
            // .then()
            // .catch(error=>console.log(error))
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
                <form onSubmit={handleReg} className="card flex-shrink-0 shadow-2xl bg-white pb-10 px-24">
                <div className="card-body">
                    <h3 className='text-black text-3xl font-semibold'>Create an account</h3>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                    </div>
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
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-warning">Create an account</button>
                    <p className='pt-5 text-black'>Already have an account? <Link className='underline text-blue-700' to='/login'>Login</Link></p>
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

export default Registration;