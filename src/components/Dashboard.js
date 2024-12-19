// 2. Dashboard Component:
// - Displays a summary of tasks, users, and roles.

import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [summary, setSummary] = useState({ completedTasks: 0, overdueTasks: 0, totalUsers: 0 });

  useEffect(() => {
    // Mock API call
    setSummary({ completedTasks: 25, overdueTasks: 5, totalUsers: 100 });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Completed Tasks: {summary.completedTasks}</p>
      <p>Overdue Tasks: {summary.overdueTasks}</p>
      <p>Total Users: {summary.totalUsers}</p>
    </div>
  );
}

export default Dashboard;