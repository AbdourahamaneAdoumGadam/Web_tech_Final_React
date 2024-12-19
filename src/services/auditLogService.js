import axios from 'axios'; 
const API_URL = 'http://localhost:8080/api/audit-logs/getall'; 
const auditLogService = { getAuditLogs: async () => { 
    const response = await axios.get(API_URL); 
    return response.data; 
},
  getAuditLog: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },
  createAuditLog: async (auditLog) => {
    const response = await axios.post(API_URL, auditLog);
    return response.data;
  },
  updateAuditLog: async (id, auditLog) => {
    const response = await axios.put(`${API_URL}/${id}`, auditLog);
    return response.data;
  },
  deleteAuditLog: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default auditLogService;
