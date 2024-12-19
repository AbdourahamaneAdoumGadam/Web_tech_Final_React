import React, { useState } from 'react';
import authService from '../services/authService';

function ResetPassword() {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await authService.resetPassword(token, newPassword);
      setMessage('Password reset successful! You can now log in with your new password.');
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
      background: 'linear-gradient(45deg, #e3f2fd, #ffffff)', // Light gradient background
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
      backgroundColor: '#42a5f5', // Blue button
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#1e88e5', // Darker blue for hover
    },
    message: {
      textAlign: 'center',
      marginTop: '20px',
      color: message.includes('successful') ? '#4caf50' : '#e53935', // Green for success, red for error
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Reset Password</h1>
        <p style={styles.paragraph}>
          Enter the token sent to your email and your new password to reset it.
        </p>
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
