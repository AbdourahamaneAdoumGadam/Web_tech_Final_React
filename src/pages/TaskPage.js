import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './ListTasks'; // Ensure the path is correct
import authService from '../services/authService'; // Adjust the path based on your structure

const TaskPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminRole = async () => {
      const userRole = await authService.getUserRole();
      setIsAdmin(userRole === 'ADMIN');
    };

    checkAdminRole();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddTaskClick = () => {
    navigate('/addtask');
  };

  return (
    <div>

      <TaskList searchQuery={searchQuery} />
    </div>
  );
};

export default TaskPage;
