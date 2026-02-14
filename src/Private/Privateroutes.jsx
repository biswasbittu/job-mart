import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/Authcontext/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privateroutes = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location =useLocation();
    if(loading){
        return <div className="text-center mt-20"><span className="loading loading-spinner loading-xl"></span></div>
    }
    
    if(!user){
        return <Navigate to='/signin' state={location.pathname}></Navigate> 
    }
    return children;
};

export default Privateroutes;