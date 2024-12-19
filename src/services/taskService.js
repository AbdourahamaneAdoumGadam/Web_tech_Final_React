import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

const taskService = {
  getTasks: async () => {
    const response = await axios.get(`${API_URL}/getall`);
    return response.data;
  },
  createTask: async (task) => {
    const response = await axios.post(`${API_URL}/register`, task);
    return response.data;
  },
  deleteTask: async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
  },
};

export default taskService;
