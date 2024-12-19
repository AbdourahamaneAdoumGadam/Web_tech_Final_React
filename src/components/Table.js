// src/components/Table.js
import React from 'react';

function Table({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>; // Handle undefined or non-array data
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
