import React from 'react';
import { FaClock, FaDollarSign, FaStreetView } from 'react-icons/fa';
import { FaTimeline } from 'react-icons/fa6';

const SpotCard = ({ spot }) => {
    const { spot_name, userName, email, imageURL, description, average_cost, seasonality, country_name, location, travel_time, total_Visitor_Year } = spot;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="p-6 space-y-1">
                <h2 className="card-title">{spot_name}</h2>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-2'><FaDollarSign></FaDollarSign> {average_cost}</p>
                    <p className='flex items-center gap-2'><FaTimeline></FaTimeline> {seasonality}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-2'><FaClock></FaClock> {travel_time}</p>
                    <p className='flex items-center gap-2'><FaStreetView></FaStreetView> {total_Visitor_Year}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;