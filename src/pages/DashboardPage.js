import React, { useEffect, useState } from 'react';
import taskService from '../services/taskService';
import userService from '../services/userService';

function DashboardPage() {
  const [summary, setSummary] = useState({
    totalTasks: 29,
    completedTasks: 13,
    pendingTasks: 7,
    totalUsers: 9,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const totalTasks = await taskService.getTaskCount();
      const completedTasks = await taskService.getCompletedTaskCount();
      const pendingTasks = totalTasks - completedTasks;
      const totalUsers = await userService.getUserCount();

      setSummary({
        totalTasks,
        completedTasks,
        pendingTasks,
        totalUsers,
      });
    };
    fetchSummary();
  }, []);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)';
    document.body.style.color = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, []);

  const styles = {
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '30px auto',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
    header: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '20px',
    },
    scheduleSection: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '40px',
    },
    scheduleTitle: {
      fontSize: '1.8rem',
      marginBottom: '10px',
      color: '#ffffff',
    },
    scheduleBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px',
    },
    activityChart: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: '20px',
      textAlign: 'center',
    },
    bar: {
      width: '50px',
      height: '100px',
      backgroundColor: '#7f58af',
      borderRadius: '10px',
      marginBottom: '10px',
    },
    text: {
      fontSize: '1rem',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
    },
    card: {
      flex: '1 1 45%',
      maxWidth: '300px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    cardValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.header}>Dashboard Overview</h1>

        {/* Project Schedule Section */}
        <div style={styles.scheduleSection}>
          <h2 style={styles.scheduleTitle}>Feature for Project Schedule Overview</h2>
          <div style={styles.scheduleBox}>
            <p style={styles.text}>
              With our feature, you can quickly review the schedule for all your projects. This allows
              you to optimally allocate your work time and monitor task completion.
            </p>
          </div>
        </div>

        {/* Activity Overview Section */}
        <div style={styles.scheduleSection}>
          <h2 style={styles.scheduleTitle}>Activity Overview in the Project Management System</h2>
          <div style={styles.scheduleBox}>
            <div style={styles.activityChart}>
              <div>
                <div style={{ ...styles.bar, height: '120px' }}></div>
                <div style={styles.text}>02.08</div>
              </div>
              <div>
                <div style={{ ...styles.bar, height: '180px', backgroundColor: '#9b59b6' }}></div>
                <div style={styles.text}>04.08</div>
              </div>
              <div>
                <div style={{ ...styles.bar, height: '100px' }}></div>
                <div style={styles.text}>06.08</div>
              </div>
              <div>
                <div style={{ ...styles.bar, height: '60px', backgroundColor: '#a29bfe' }}></div>
                <div style={styles.text}>07.08</div>
              </div>
            </div>
            <p style={styles.text}>
              In our system, you can easily track the progress of your projects and the time spent on
              each task.
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <div style={styles.cardContainer}>
          <div
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={styles.cardTitle}>Total Tasks</div>
            <div style={styles.cardValue}>{summary.totalTasks}</div>
          </div>
          <div
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={styles.cardTitle}>Completed Tasks</div>
            <div style={styles.cardValue}>{summary.completedTasks}</div>
          </div>
          <div
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={styles.cardTitle}>Pending Tasks</div>
            <div style={styles.cardValue}>{summary.pendingTasks}</div>
          </div>
          <div
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={styles.cardTitle}>Total Users</div>
            <div style={styles.cardValue}>{summary.totalUsers}</div>
          </div>
        </div>
      </div>
  );
}

export default DashboardPage;
