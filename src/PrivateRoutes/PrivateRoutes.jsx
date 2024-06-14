import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);
    
    if(loading){
        return <h1>loading</h1>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return (
        <div>
            {children}
            
        </div>
    );
};

export default PrivateRoutes;