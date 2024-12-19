import React, { useState } from 'react';
import authService from '../services/authService';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      await authService.resetPassword(email);
      setMessage('Password reset instructions have been sent to your email.');
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Error resetting password. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(45deg, #ece9e6, #ffffff)', // Subtle gradient for a clean background
      padding: '20px',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#ffffff', // White background for the form
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333333',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    paragraph: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#555555',
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
      backgroundColor: '#007bff', // Primary blue color for the button
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Darker blue for hover effect
    },
    message: {
      textAlign: 'center',
      marginTop: '20px',
      color: message.includes('instructions') ? '#28a745' : '#dc3545', // Green for success, red for error
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Reset Password</h1>
        <p style={styles.paragraph}>
          To reset your password, please enter your email address and follow the instructions sent to you.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleResetPassword}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Reset Password
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default ResetPassword;
