import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token') || null,
        user: JSON.stringify(localStorage.getItem('user')) || null,

    });

    // Login handler
    const login = (token, userData) => {
        const dummyToken = 'dummy-token-123';
        localStorage.setItem('token', dummyToken);
        localStorage.setItem('user', JSON.stringify(userData));
        setAuth({ token, user: userData });

    };

    // Logout handler
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ setAuth, auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
