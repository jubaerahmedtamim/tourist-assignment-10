import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTouristSpot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loadedSingleData = useLoaderData()
    const { _id, imageURL, description, spot_name, average_cost, seasonality, country_name, location, travel_time, total_Visitor_Year } = loadedSingleData;

    const onSubmit = (data) => {
        const { imageURL, description, spot_name, average_cost, seasonality, country_name, location, travel_time, total_Visitor_Year } = data;

        const touristSpotData = { imageURL, description, spot_name, average_cost, seasonality, country_name, location, travel_time, total_Visitor_Year }

        fetch(`http://localhost:5000/spot/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(touristSpotData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (datamodifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Tourist spot has been update successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='w-5/6 mx-auto mb-10'>
            <h1 className=' font-bold text-4xl text-center my-10'>Add Tourist <span className='text-[#52b788]'>Spot</span></h1>
            <form className='grid grid-cols-1 md:gap-5 md:grid-cols-2' onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Tourist Spot Name<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('spot_name', { required: true })} type="text" placeholder="Tourist spot name" defaultValue={spot_name} className="input input-bordered w-full" />
                    {errors.spot_name && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Country Name<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('country_name', { required: true })} type="text" placeholder="Country name" defaultValue={country_name} className="input input-bordered w-full" />
                    {errors.country_name && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Location<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('location', { required: true })} type="text" placeholder="Spot location" defaultValue={location} className="input input-bordered w-full" />
                    {errors.location && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Short description<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('description', { required: true })} type="text" placeholder="Short description" defaultValue={description} className="input input-bordered w-full" />
                    {errors.description && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Average Cost<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('average_cost', { required: true })} type="text" placeholder="Average cost" defaultValue={average_cost} className="input input-bordered w-full" />
                    {errors.average_cost && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Seasonality<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('seasonality', { required: true })} type="text" placeholder="Season (summer, winter)" defaultValue={seasonality} className="input input-bordered w-full" />
                    {errors.seasonality && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Travel Time<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('travel_time', { required: true })} type="text" placeholder="Travel time" defaultValue={travel_time} className="input input-bordered w-full" />
                    {errors.travel_time && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Total Visitor Per Year<sup className='text-red-600 font-bold'>*</sup> </span>
                    </div>
                    <input {...register('total_Visitor_Year', { required: true })} type='number' placeholder="Total visitor per year." defaultValue={total_Visitor_Year} className="input input-bordered w-full" />
                    {errors.total_Visitor_Year && <span className='text-red-600 text-sm font-medium'>This field is required</span>}
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium text-[#52b788]">Image URL</span>
                    </div>
                    <input {...register('imageURL', { required: false })} type="text" placeholder="Image URL" defaultValue={imageURL} className="input input-bordered w-full" />
                </label>
                <input className='btn col-span-2 mt-3 bg-[#52b788] text-lg text-white hover:text-black  font-bold' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateTouristSpot;