import React, { useState } from 'react';
import authService from '../services/authService';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await authService.forgotPassword(email);
      setPassword(response.password);
      setMessage('Password retrieved successfully.');
    } catch (error) {
      console.error('Error retrieving password:', error);
      setMessage('Error retrieving password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email address to retrieve your password.</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Retrieve Password</button>
      {message && <p>{message}</p>}
      {password && <p>Your password is: {password}</p>}
    </div>
  );
}

export default ForgotPassword;
