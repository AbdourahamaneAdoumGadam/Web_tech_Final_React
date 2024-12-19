import React, { useEffect, useState } from 'react';
import auditLogService from '../services/auditLogService';

function ListAuditLogs() {
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    loadAuditLogs();
  }, []);

  const loadAuditLogs = async () => {
    const response = await auditLogService.getAuditLogs();
    setAuditLogs(response);
  };

  return (
    <div>
      <h1>Audit Log List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Action</th>
            <th>Timestamp</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((auditLog) => (
            <tr key={auditLog.id}>
              <td>{auditLog.id}</td>
              <td>{auditLog.action}</td>
              <td>{auditLog.timestamp}</td>
              <td>{auditLog.user.name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAuditLogs;
