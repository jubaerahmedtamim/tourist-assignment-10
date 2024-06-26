import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginAnimation from "../../public/RegisterAnimation.json";
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import Swal from 'sweetalert2'




const SignUp = () => {
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { name, email, password, imageURL } = data;

        // for password validation.
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            return (
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Password should contain at least one Uppercase, one lowercase & 6 characters in length.",
                    showConfirmButton: false,
                    timer: 1500
                }))
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return (
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Please provide a valid email address.",
                    showConfirmButton: false,
                    timer: 1500
                }))
        }
        createUser(email, password)
            .then(result => {
                console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: imageURL,
                }).then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your registration successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch((error) => {
                    console.log(error);
                });
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
    const handleSocialSignIn = (socialLogin, socialName)=>{
        socialLogin()
        .then(result=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Login with ${socialName} successful.`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='grid md:grid-cols-2 md:border md:border-l-0 gap-8 rounded-lg  px-2 lg:px-0  md:max-w-7xl mx-auto items-center'>
            <div className='bg-[#d8f3dc] md:rounded-l-lg hidden md:block'>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <div className='md:pr-8'>
                <h1 className=' font-bold text-4xl'>Sign up <span className='text-[#52b788]'>Now</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">What is your name? <sup className='text-red-600 font-bold'>*</sup> </span>
                        </div>
                        <input {...register('name', { required: true })} type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                        {errors.name && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Email address <sup className='text-red-600 font-bold'>*</sup></span>
                        </div>
                        <input {...register('email', { required: true })} type="email" name='email' placeholder="Email address" className="input input-bordered w-full" />
                        {errors.email && <span className='text-red-600 text-sm font-medium'>This field is required.</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Password <sup className='text-red-600 font-bold'>*</sup></span>
                        </div>
                        <input {...register('password', { required: true })} type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
                        {errors.password && <span className='text-red-600 text-sm font-medium'>This field is required.</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-medium text-[#52b788]">Profile picture</span>
                        </div>
                        <input {...register('imageURL', { required: false })} type="text" name='imageURL' placeholder="Image URL (optional)" className="input input-bordered w-full" />
                    </label>
                    <div className='flex items-center gap-1 mt-2'>
                        <input {...register('check', { required: true })} type="checkbox" name="check" id="terms" />
                        <label className='text-sm' htmlFor="terms">I agree to the <span className='text-[#52b788]'><Link to='#'>Terms of Service</Link></span> and <span className='text-[#52b788]'> <Link to='#'>Privacy Policy</Link> </span>.</label>
                        {errors.check && <span className='text-red-600 text-sm font-medium'>Fill the check box.</span>}
                    </div>
                    <input className='btn btn-block mt-3 bg-[#52b788] text-lg text-white hover:text-black  font-bold' type="submit" value="Sign up" />
                </form>
                <p className='text-base my-2 text-center'>Already have an account? <span className='text-[#52b788]'><Link to='/login'>Sign in now!</Link></span></p>
                {/* social login part */}
                <div className="divider">OR</div>
                <div >
                    <div className='flex gap-4 justify-center mt-4'>
                        <button onClick={()=> handleSocialSignIn(googleSignIn, "google")} className='btn  bg-[#52b788]  text-xl text-white hover:text-black flex gap-2 items-center'>
                            <FaGoogle></FaGoogle> Google
                        </button>
                        <button onClick={()=> handleSocialSignIn(githubSignIn, "github")} className='btn  bg-[#52b788] text-xl  text-white hover:text-black  flex gap-2 items-center'>
                            <FaGithub></FaGithub> Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;