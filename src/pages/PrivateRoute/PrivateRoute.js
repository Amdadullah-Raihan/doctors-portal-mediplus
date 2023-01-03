import { render } from '@testing-library/react';
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const {user} = useAuth();


    return  user.email ? children : <Navigate to={{pathname:'/login'}}></Navigate>

    
};

export default PrivateRoute;