import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoEarth } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    // average_cost, seasonality, travel_time, total_Visitor_Year
    return (
        <div className='w-5/6 mx-auto mb-10 '>
            <h1 className=' font-bold text-4xl text-center my-10'>Package <span className='text-[#52b788]'>Details</span></h1>
            <div className='grid md:grid-cols-4 md:gap-10'>
                <div className='col-span-2 space-y-2'>
                    <img src={loadedData?.imageURL} alt="" />
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-3 px-4 text-[#52b788] text-xl'><FaLocationDot></FaLocationDot> {loadedData.location} </p>
                        <p className='flex items-center gap-3 px-4 text-[#52b788] text-xl'><IoEarth></IoEarth> {loadedData.country_name} </p>
                    </div>
                    <h1 className='text-3xl md:text-4xl md:pl-4 font-semibold'>{loadedData?.spot_name}</h1>
                    <p className='md:pl-4 text-gray-500'>{loadedData?.description}</p>

                    <div className="overflow-x-auto">
                        <table className="table border-collapse">
                            <tbody>
                                <tr>
                                    <td className='border text-base font-medium'>Average Cost:</td>
                                    <td className='border text-base'>$ {loadedData?.average_cost}</td>
                                </tr>
                                <tr>
                                    <td className='border text-base font-medium'>Season:</td>
                                    <td className='border text-base'>{loadedData?.seasonality}</td>
                                </tr>
                                <tr>
                                    <td className='border text-base font-medium'>Time of tour:</td>
                                    <td className='border text-base'>{loadedData?.travel_time}</td>
                                </tr>
                                <tr>
                                    <td className='border text-base font-medium'>Visitors in a year:</td>
                                    <td className='border text-base'>{loadedData?.total_Visitor_Year}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-2 md:mt-0 mt-16 md:px-4'>
                    <div className='flex justify-between mb-5'>
                        <h2 className='text-2xl font-semibold'>Book now</h2>
                        <p className='text-2xl text-[#52b788] font-semibold'>$ {loadedData?.average_cost}<span className='text-black text-lg font-medium'>/person</span> </p>
                    </div>
                    <form className='space-y-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="Jhankar Mahbub" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="example@gmail.com" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" placeholder="+880-1XXXXXXXXX" />
                        </label>
                        <textarea placeholder="Additonal Information..." className="textarea textarea-bordered textarea-lg w-full max-w-xs block" ></textarea>
                        <input className='btn btn-block col-span-2 mt-3 bg-[#52b788] text-lg text-white hover:text-black  font-bold' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;