import axios from 'axios';

// Set up the base URL for all requests
const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Setting up Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication APIs
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Missing Persons APIs
export const reportMissingPerson = async (missingPersonData) => {
  try {
    const response = await api.post('/missing', missingPersonData);
    return response.data;
  } catch (error) {
    console.error("Failed to report missing person:", error);
    throw error;
  }
};

export const getMissingPersons = async () => {
  try {
    const response = await api.get('/missing');
    return response.data;
  } catch (error) {
    console.error("Failed to retrieve missing persons:", error);
    throw error;
  }
};

export const getMissingPersonById = async (id) => {
  try {
    const response = await api.get(`/missing/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to retrieve missing person:", error);
    throw error;
  }
};

// Example Contact Police API
export const contactPolice = async (contactData) => {
  try {
    const response = await api.post('/contact-police', contactData);
    return response.data;
  } catch (error) {
    console.error("Failed to contact police:", error);
    throw error;
  }
};

export default {
  loginUser,
  registerUser,
  reportMissingPerson,
  getMissingPersons,
  getMissingPersonById,
  contactPolice,
};