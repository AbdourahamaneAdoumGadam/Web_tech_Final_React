import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);
      const { token, role } = response;

      // Save token to local storage
      localStorage.setItem('token', token);

      // Navigate based on user role
      if (role === 'ADMIN') {
        navigate('/admin');
      } else if (role === 'USER') {
        navigate('/user');
      } else if (role === 'MANAGER') {
        navigate('/manager');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  // Inline styles for the Login component
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)', // Gradient background
      padding: '20px',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '40px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box', // Prevent input overflow
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#d5c0d1',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#a583a4', // Darker hover effect
    },
    text: {
      textAlign: 'center',
      color: '#333',
      marginTop: '20px',
    },
    link: {
      color: '#92638f',
      textDecoration: 'none',
    },
    registerText: {
      marginTop: '20px',
      textAlign: 'center',
      color: '#333',
    },
    registerLink: {
      color: '#90638c',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  };

  return (
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h1 style={styles.heading}>Login</h1>
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
          <button
              onClick={handleLogin}
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Login
          </button>
          <div style={styles.text}>
            <p>
              Forgot your password?{' '}
              <Link to="/reset" style={styles.link}>
                Reset Password
              </Link>
            </p>
          </div>
          <div style={styles.registerText}>
            <p>
              Don't have an account?{' '}
              <Link to="/signup" style={styles.registerLink}>
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Login;
