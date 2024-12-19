import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users'; // Adjust based on your actual backend URL

const authService = {
  signup: async (name, email, password, role, twoFactorEnabled) => {
    const user = { name, email, password, role, twoFactorEnabled };
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  },

  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Ensure response contains token and role
  },

  requestPasswordReset: async (email) => {
    const response = await axios.post(`${API_URL}/request-reset`, { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await axios.post(`${API_URL}/reset-password`, { token, newPassword });
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  },

  getUserProfile: async (email) => {
    const response = await axios.get(`${API_URL}/profile`, { params: { email } });
    return response.data;
  },

  updateUser: async (user) => {
    const response = await axios.put(`${API_URL}/update`, user);
    return response.data;
  },

  toggleTwoFactor: async (userId) => {
    const response = await axios.patch(`${API_URL}/${userId}/two-factor`);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await axios.get(`${API_URL}/getall`);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  getUserRole: async () => {
    // Assuming the user role is stored in local storage or can be fetched from an API
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.role : null;
  }
};

export default authService;
