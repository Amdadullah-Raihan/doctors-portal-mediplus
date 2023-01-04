import React, { useContext } from 'react';
import { serviceContext } from '../context/ServiceProvider';

const useService = () => {
    return useContext(serviceContext)
}


export default useService;