import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginAnimation from "../../public/RegisterAnimation.json";
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { loginWithEmail } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {

        const { email, password } = data;

        loginWithEmail(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your login has successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className='grid md:grid-cols-2 md:border md:border-l-0 gap-8 rounded-lg px-2 lg:px-0  md:max-w-7xl mx-auto items-center'>
            <div className='bg-[#d8f3dc] md:rounded-l-lg hidden md:block'>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <div className='md:pr-8'>
                <h1 className=' font-bold text-4xl'>Please <span className='text-[#52b788]'>Login</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Email address</span>
                        </div>
                        <input {...register('email', { required: true })} type="email" name='email' placeholder="Email address" className="input input-bordered w-full" />
                        {errors.email && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Password</span>
                        </div>
                        <input {...register('password', { required: true })} type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
                        {errors.password && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                    </label>

                    <div className='flex items-center gap-1 mt-2'>
                        <Link><p className='text-sm my-2'>Forget password?</p></Link>
                    </div>
                    <input className='btn btn-block mt-3 bg-[#52b788] text-lg text-white hover:text-black font-bold' type="submit" value="Login" />
                </form>
                <p className='text-base my-2 text-center'>New here? <span className='text-[#52b788]'><Link to='/register'>Sign up now!</Link></span></p>
                {/* social login part */}
                <div className="divider text-[#52b788]">Login with</div>
                <div >
                    <div className='flex gap-4 justify-center mt-4'>
                        <button className='btn  bg-[#52b788]  text-xl text-white hover:text-black flex gap-2 items-center'>
                            <FaGoogle></FaGoogle> Google
                        </button>
                        <button className='btn  bg-[#52b788] text-xl  text-white hover:text-black  flex gap-2 items-center'>
                            <FaGithub></FaGithub> Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;