import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/sharedComponents/Loading';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);
    
    if(loading){
        return <Loading></Loading>
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