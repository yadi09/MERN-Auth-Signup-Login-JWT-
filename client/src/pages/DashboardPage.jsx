// src/pages/DashboardPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const DashboardPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);

            if (!decodedToken || decodedToken.exp * 1000 < Date.now() || decodedToken.role !== 'admin') {
                navigate('/login');
                return;
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <h2>Welcome to the Dashboard!</h2>
            <p>You are logged in!</p>
        </div>
    );
};

export default DashboardPage;
