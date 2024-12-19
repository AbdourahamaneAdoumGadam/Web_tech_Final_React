import axios from 'axios';

const API_URL = 'http://localhost:8080/api/roles'; // URL for database connection

const roleService = {
  getRoles: async (page) => {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data;
  },

  createRole: async (role) => {
    const response = await axios.post(API_URL, role);
    return response.data;
  },

  updateRole: async (id, updatedRole) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedRole);
    return response.data;
  },

  deleteRole: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default roleService;
