import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase_config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(null)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const updateUser= (name)=>{
    //     setLoading(true)
    //   updateProfile(auth.currentUser,{
    //         displayName: name,
    //     })
    // }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return()=> {
            unsubscribe();
        }
    },[])


    const info = {
        user,
        loading,
        createUser,
        login,
        // updateUser,
        logout
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;