import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import AdminNavigation from '../components/AdminNavigation';
import UserPage from './UserPage';
import TaskPage from './TaskPage';
import AddTask from './AddTask';

const AdminPage = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    document.body.style.background = 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)';
    document.body.style.color = '#333';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, []);

  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  const handleLogout = () => {
    // Perform any necessary logout logic, such as clearing tokens or session data
    navigate('/login'); // Redirect to login page
  };

  const styles = {
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(12px)',
      color: '#333',
      position: 'relative',
    },
    header: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#4A154B',
    },
    contentWrapper: {
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: '20px',
      transition: 'all 0.3s ease-in-out',
      minHeight: '400px',
    },
    button: {
      display: 'inline-block',
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#4A154B',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#7B2E6B',
      transform: 'scale(1.05)',
    },
    logoutButton: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      padding: '10px 20px',
      backgroundColor: '#d5c0d1', /* Logout button color */
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease', /* Smooth transition for all properties */
    },
    logoutButtonHover: {
      backgroundColor: '#a084a5', /* Change background color on hover */
      transform: 'scale(1.05)', /* Slightly enlarge the button */
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', /* Add a subtle shadow */
    }
  };

  return (
      <div style={styles.container}>
        <button
            style={styles.logoutButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.logoutButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.logoutButton.backgroundColor)}
            onClick={handleLogout}
        >
          Logout
        </button>
        <h1 style={styles.header}>Admin Dashboard</h1>
        {!selectedReport ? (
            <AdminNavigation onSelect={handleSelectReport} />
        ) : (
            <div style={styles.contentWrapper}>
              {selectedReport === 'users' && (
                  <>
                    <UserPage />
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('tasks')}
                    >
                      View Tasks
                    </button>
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('add-task')}
                    >
                      Add Task
                    </button>
                  </>
              )}
              {selectedReport === 'tasks' && (
                  <>
                    <TaskPage />
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('users')}
                    >
                      View Users
                    </button>
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('add-task')}
                    >
                      Add Task
                    </button>
                  </>
              )}
              {selectedReport === 'add-task' && (
                  <>
                    <AddTask onTaskAdded={() => setSelectedReport('tasks')} />
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('tasks')}
                    >
                      Go to Tasks
                    </button>
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => setSelectedReport('users')}
                    >
                      View Users
                    </button>
                  </>
              )}
            </div>
        )}
      </div>
  );
};

export default AdminPage;
