import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ children, allowedRoles }) => {
    const userRole = localStorage.getItem('role'); 

    if (!userRole || !allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" />; 
    }

    return children;
};

export default RoleBasedRoute;
