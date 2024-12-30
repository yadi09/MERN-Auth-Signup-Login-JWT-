// src/services/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, credentials);
        return response; // JWT token or user data
    } catch (error) {
        throw error;
    }
};

export default { registerUser, loginUser };