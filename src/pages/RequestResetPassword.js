import React, { useState } from 'react';
import authService from '../services/authService';

function RequestResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async () => {
    try {
      await authService.requestPasswordReset(email); // API call for requesting reset
      setMessage('Instructions have been sent to your email.');
    } catch (error) {
      console.error('Error requesting password reset:', error);
      setMessage('Error requesting password reset. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(45deg, #ffcccb, #f8f9fa)', // Light gradient background
      padding: '20px',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#ffffff', // White form background
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333333', // Neutral heading color
      fontSize: '24px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#ff7b72', // Soft red button
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#ff5245', // Darker red for hover
    },
    message: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#333333',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Request Password Reset</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
          Enter your email address to receive reset instructions.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleRequestReset}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Send Instructions
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default RequestResetPassword;
