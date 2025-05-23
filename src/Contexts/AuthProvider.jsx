import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const loginWithGooglePopUp = () => {
        return signInWithPopup(auth, provider);
    }

    const signInWithGooglePopUp = () => {
        return signInWithPopup(auth, provider);
    }



    const userInfo = {
        loginUser,
        createUser,
        signOutUser,
        loginWithGooglePopUp,
        signInWithGooglePopUp
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;