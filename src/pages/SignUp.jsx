import React from 'react';
import Lottie from "lottie-react";
import loginAnimation from "../../public/RegisterAnimation.json";
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div className='grid md:grid-cols-2 md:border md:border-l-0 gap-8 rounded-lg  px-2 lg:px-0  md:max-w-7xl mx-auto items-center'>
            <div className='bg-[#d8f3dc] md:rounded-l-lg hidden md:block'>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <div className='md:pr-8'>
                <h1 className=' font-bold text-4xl'>Sign up <span className='text-[#52b788]'>Now</span></h1>
                <form >
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">What is your name?</span>
                        </div>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Email address</span>
                        </div>
                        <input type="text" name='email' placeholder="Email address" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Password</span>
                        </div>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Profile picture</span>
                        </div>
                        <input type="text" name='imageURL' placeholder="Image URL" className="input input-bordered w-full" />
                    </label>
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" name="check" id="terms" />
                        <label className='text-sm' htmlFor="terms">I agree to the <span className='text-[#52b788]'><Link to='#'>Terms of Service</Link></span> and <span className='text-[#52b788]'> <Link to='#'>Privacy Policy</Link> </span>.</label>
                    </div>
                    <input className='btn btn-block mt-3 bg-[#52b788] text-lg text-white hover:text-black  font-bold' type="submit" value="Sign up" />
                </form>
                <p className='text-base my-2 text-center'>Already have an account? <span className='text-[#52b788]'><Link to='/login'>Sign in now!</Link></span></p>
                {/* social login part */}
                <div className="divider">OR</div>
                <div >
                    <div className='flex gap-4 justify-center mt-4'>
                        <button className='btn  bg-[#52b788]  text-xl text-white hover:text-black flex gap-2 items-center'>
                            <FaGoogle></FaGoogle> Google
                        </button>
                        <button  className='btn  bg-[#52b788] text-xl  text-white hover:text-black  flex gap-2 items-center'>
                            <FaGithub></FaGithub> Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;