import axios from 'axios';
import { AppRoutes } from '../constant/constant';

// Environment variable se URL fetch karein
const BASE_URL = process.env.VITE_DEVURL;
console.log(BASE_URL);

export const login = async (userData) => {
  console.log(userData);
  
  try {
    const response = await axios.post(AppRoutes.login, userData);
    return response;
  } catch (error) {
    console.log("sigup error=>",error.message);
    
    throw error.response?.data || error.message;
  }
};

export const register = async (credentials) => {
  try {
    const response = await axios.post(AppRoutes.register, credentials);
    return response;
  } catch (error) {
    console.log("signIn error=>",error.message);
    
    throw error.response?.data || error.message;
  }
};


export const loanform = async (credentials) => {
  try {
    // Sending the credentials to backend
    const response = await axios.post(AppRoutes.loanapply, credentials);

    // Returning the response data
    console.log(response);
    
    return response.data; // Usually, you want to return the response data (not the whole response)
  } catch (error) {
    // Log the error message
    console.error("Loan form submission error: ", error.message);

    // Checking for error response data (if available)
    const errorMessage = error.response?.data?.message || error.message;

    // Throwing error with a detailed message
    throw new Error(errorMessage);
  }
};
