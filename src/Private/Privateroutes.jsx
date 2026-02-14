import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/Authcontext/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privateroutes = ({children}) => {
    const {user}=use(AuthContext);
    const location =useLocation();
    
    if(!user){
        return <Navigate to='/signin' state={location.pathname}></Navigate>
    }
    return children;
};

export default Privateroutes;