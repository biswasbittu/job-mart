import React from 'react';
import { use } from 'react';
import { AuthContext } from '../context/Authcontext/Authcontext';

const useAuth = () => {
    const authinfo = use(AuthContext);
    return authinfo;

};

export default useAuth;