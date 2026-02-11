import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {auth} from '../../firebase/firebase.init';



const googleProvider=new GoogleAuthProvider();
const githubProvider =new GithubAuthProvider()
const Authprovider = ({ children }) => {
    const [user,setUser]=useState(null)

    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)

    };

    const signInWithGoogle =()=>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
    }

    const signInWithGithub =()=>{
        setLoading(true)
        // console.log("Auth",auth);
        // console.log('GITHUB PROVIDER',githubProvider )
        return signInWithPopup(auth,githubProvider)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
            // console.log(currentUser)
        })
        return unSubscribe
    })
    const authInfo = {
        loading,
        user,
        creatUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        signOutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;