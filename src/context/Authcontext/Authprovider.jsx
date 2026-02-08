import React, { useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase/firebase.init';

const Authprovider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        loading,
        creatUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;