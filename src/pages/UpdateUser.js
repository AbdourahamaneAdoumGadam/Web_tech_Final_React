import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const { id } = useParams(); // Get user ID from URL

  useEffect(() => {
    // Set gradient background
    document.body.style.background = 'linear-gradient(to right, #6a11cb, #2575fc)';
    document.body.style.color = '#fff';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    axios
        .get(`/api/users/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error("There was an error fetching user!", error));

    // Cleanup background on unmount
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .put('/api/users/update', user)
        .then((response) => {
          console.log("User updated:", response.data);
        })
        .catch((error) => {
          console.error("There was an error updating the user!", error);
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
      fontSize: '1.8rem',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#2575fc',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#6a11cb',
    },
  };

  return (
      <div style={styles.container}>
        <h2 style={styles.header}>Update User</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>
            Name:
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </label>
          <label style={styles.label}>
            Email:
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </label>
          <label style={styles.label}>
            Password:
            <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </label>
          <label style={styles.label}>
            Role:
            <input
                type="text"
                name="role"
                value={user.role}
                onChange={handleChange}
                style={styles.input}
                required
            />
          </label>
          <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Update User
          </button>
        </form>
      </div>
  );
};

export default UpdateUser;
