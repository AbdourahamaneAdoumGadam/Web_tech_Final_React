import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const userService = {
  getUsers: async () => {
    const response = await axios.get(`${API_URL}/getall`);
    return response.data;
  },
  createUser: async (user) => {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  },
  deleteUser: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
  updateUser: async (id, user) => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  },
};

export default userService;
