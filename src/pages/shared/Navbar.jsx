import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut, setUser, loading } = useContext(AuthContext);
    
    const navLinks = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/allTouristSpot'>All Tourist Spot</NavLink> </li>
        <li> <NavLink to='/addTouristSpot'>Add Tourist Spot</NavLink> </li>
        <li> <NavLink to='/myList'>My List</NavLink> </li>
    </>
    // logout user
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl font-bold text-[#52b788]">Green Excursion</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    {
                        user &&
                        <div className="dropdown dropdown-end">
                                <Tooltip id="my-tooltip" />
                                <div data-tooltip-id="my-tooltip" data-tooltip-content={user ? user?.displayName : "No Name"} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user && user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>{user && user?.displayName || "No Name"}</a></li>
                                    <li><button onClick={handleLogOut}>Logout</button ></li>
                                </ul>
                        </div>
                        ||
                        <Link to="/login"> <button className="btn">login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;