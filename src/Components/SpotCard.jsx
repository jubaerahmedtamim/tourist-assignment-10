import React from 'react';
import { FaClock, FaDollarSign, FaStreetView } from 'react-icons/fa';
import { FaTimeline } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
    const { _id,spot_name, imageURL, average_cost, seasonality, travel_time, total_Visitor_Year } = spot;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={imageURL} alt="" /></figure>
            <div className="p-6 space-y-2">
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
                    <Link to={`/viewDetails/${_id}`}><button className="btn bg-[#52b788] text-white font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;