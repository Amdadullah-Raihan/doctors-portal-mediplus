import React, { createContext } from 'react';
import useServices from '../hooks/useServices';

export const serviceContext = createContext();


const ServiceProvider = ({children}) => {
    return (
        <serviceContext.Provider value={useServices()}>
            {children}
        </serviceContext.Provider>
    );
};

export default ServiceProvider;