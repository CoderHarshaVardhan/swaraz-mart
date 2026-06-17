import { post } from './api';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';

export const authService = {
  login: async (credentials) => {
    // Mock implementation
    // return post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: 'mock-jwt-token', user: { id: 1, name: 'Sample User', email: credentials.email } });
      }, 1000);
    });
  },
  
  register: async (userData) => {
    // return post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1000);
    });
  },

  logout: () => {
    // Optional: Call backend logout
  }
};
