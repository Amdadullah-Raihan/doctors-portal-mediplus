import { render } from '@testing-library/react';
import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const {user} = useAuth();
    const location = useLocation();


    return  user.email ? children : <Navigate to='/login' state={{from:location}} replace></Navigate>

    
};

export default PrivateRoute;