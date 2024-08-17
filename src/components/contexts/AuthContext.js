import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasAccount, setHasAccount] = useState(false);

    useEffect(() => {
        // Check authentication status and account existence here
        // Example: Set based on token or API call
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setHasAccount(true); // Assuming if token exists, user has an account
        } else {
            setIsAuthenticated(false);
            setHasAccount(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, hasAccount }}>
            {children}
        </AuthContext.Provider>
    );
};
