import axios from 'axios'; 
const API_URL = 'http://localhost:8080/api/comments/getall'; 
const commentService = { getComments: async () => { 
    const response = await axios.get(API_URL); 
    return response.data; 
},
  getComment: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
  createComment: async (comment) => {
    const response = await axios.post(API_URL, comment);
    return response.data;
  },
  updateComment: async (id, comment) => {
    const response = await axios.put(`${API_URL}/${id}`, comment);
    return response.data;
  },
  deleteComment: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default commentService;
