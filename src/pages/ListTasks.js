import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taskService from '../services/taskService';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const loadTasks = async () => {
    try {
      const response = await taskService.getTasks();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      loadTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleAddTaskClick = () => {
    navigate('/addtask');
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.dueDate.includes(searchQuery)
  );

  const styles = {
    pageBackground: {
      background: 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    taskListContainer: {
      width: '90%',
      maxWidth: '1200px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      color: '#4a148c',
      marginBottom: '20px',
      fontSize: '2em',
    },
    searchInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '1em',
    },
    button: {
      backgroundColor: '#8e24aa',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '1em',
    },
    buttonHover: {
      backgroundColor: '#6a1b9a',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    tableHeader: {
      backgroundColor: '#f3e5f5',
      color: '#4a148c',
      fontWeight: 'bold',
    },
    tableCell: {
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      color: '#4a148c',
    },
    tableRowHover: {
      backgroundColor: '#f5f5f5',
    },
    deleteButton: {
      backgroundColor: '#e53935',
      color: 'white',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    deleteButtonHover: {
      backgroundColor: '#d32f2f',
    },
  };

  return (
      <div style={styles.pageBackground}>
        <div style={styles.taskListContainer}>
          <h1 style={styles.header}>Task List</h1>
          <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
          />
          <button
              onClick={handleAddTaskClick}
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Add Task
          </button>
          <table style={styles.table}>
            <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.tableCell}>Title</th>
              <th style={styles.tableCell}>Description</th>
              <th style={styles.tableCell}>Status</th>
              <th style={styles.tableCell}>Priority</th>
              <th style={styles.tableCell}>Due Date</th>
              <th style={styles.tableCell}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {filteredTasks.map((task) => (
                <tr
                    key={task.id}
                    style={styles.tableRow}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                >
                  <td style={styles.tableCell}>{task.title}</td>
                  <td style={styles.tableCell}>{task.description}</td>
                  <td style={styles.tableCell}>{task.status}</td>
                  <td style={styles.tableCell}>{task.priority}</td>
                  <td style={styles.tableCell}>{task.dueDate}</td>
                  <td style={styles.tableCell}>
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        style={styles.deleteButton}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.deleteButton.backgroundColor}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
