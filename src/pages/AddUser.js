import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    // Apply gradient background
    document.body.style.background = 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)';
    document.body.style.color = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    // Cleanup background on unmount
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/register', user)
        .then(response => {
          console.log('User added:', response.data);
          setUser({ name: '', email: '', password: '', role: '' }); // Reset form fields
        })
        .catch(error => {
          console.error('There was an error adding the user!', error);
        });
  };

  const styles = {
    container: {
      width: '90%',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    header: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#00ADB5',
      color: '#ffffff',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#007B7F',
    },
  };

  return (
      <div style={styles.container}>
        <h2 style={styles.header}>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Role:</label>
            <input
                type="text"
                name="role"
                value={user.role}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </div>
          <button type="submit" style={styles.button}>
            Add User
          </button>
        </form>
      </div>
  );
};

export default AddUser;
