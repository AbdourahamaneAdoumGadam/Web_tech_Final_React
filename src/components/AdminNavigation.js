import React from 'react';

const AdminNavigation = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('users')}>View User Report</button>
      <button onClick={() => onSelect('tasks')}>View Task Report</button>
      <button onClick={() => onSelect('add-task')}>Add Task</button> {/* New button to add task */}
    </div>
  );
};

export default AdminNavigation;
