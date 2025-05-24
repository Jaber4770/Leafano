import React, { use } from 'react';
import { AuthContext } from './Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user } = use(AuthContext);



    if (user) { 
        return children;
    } else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;