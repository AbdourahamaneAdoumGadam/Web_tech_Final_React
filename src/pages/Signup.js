import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/authService';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name) {
      alert('Name is required!');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address!');
      return false;
    }

    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return false;
    }

    if (!role) {
      alert('Please select a role!');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      await authService.signup(name, email, password, role, twoFactorEnabled);
      alert('Signup successful!');

      // Redirect based on role
      if (role === 'ADMIN') {
        navigate('/admin');
      } else if (role === 'USER') {
        navigate('/Dashboard');
      } else if (role === 'MANAGER') {
        navigate('/manager');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const styles = {
    body: {
      height: '100vh',
      margin: 0,
      background: 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)', // Gradient background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#4a4a4a',
    },
    input: {
      width: '95%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    select: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      color: '#4a4a4a',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      margin: '10px 0',
    },
    label: {
      fontSize: '14px',
      color: '#4a4a4a',
    },
    checkbox: {
      marginRight: '10px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#90638c',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#a583a4',
    },
    footerText: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#4a4a4a',
    },
    link: {
      color: '#90638c',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
      <div style={styles.body}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Signup</h1>
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
          />
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
          />
          <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            <option value="MANAGER">MANAGER</option>
          </select>
          <div style={styles.checkboxContainer}>
            <label style={styles.label}>
              <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  style={styles.checkbox}
              />
              Enable Two-Factor Authentication
            </label>
          </div>
          <button
              onClick={handleSignup}
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Signup
          </button>
          <p style={styles.footerText}>
            Already have an account?{' '}
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
  );
}

export default Signup;
