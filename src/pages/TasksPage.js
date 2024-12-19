// TasksPage.js
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import taskService from '../services/taskService';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Set gradient background
    document.body.style.background = 'linear-gradient(to right, #2193b0, #6dd5ed)';
    document.body.style.color = '#fff';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    const fetchTasks = async () => {
      try {
        const { data, totalPages } = await taskService.getTasks(currentPage);
        setTasks(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();

    // Cleanup background on unmount
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, [currentPage]);

  const styles = {
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    header: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
    },
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.header}>Tasks</h1>
        <Table data={tasks} columns={["ID", "Title", "Status"]} />
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
      </div>
  );
}

export default TasksPage;
