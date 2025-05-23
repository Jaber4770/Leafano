import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        return signOut(auth);
    }


    const userInfo = {
        loginUser,
        createUser,
        signOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;