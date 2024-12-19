import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        setError(null); // Reset error before searching

        axios.get(`/api/users/profile?email=${email}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("User not found or an error occurred.");
                setLoading(false);
            });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Search User</h2>

            <div style={styles.formGroup}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleSearch} style={styles.button} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {error && <p style={styles.error}>{error}</p>}

            {user && !error && (
                <div style={styles.userInfo}>
                    <h3>User Found</h3>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
            )}
        </div>
    );
};

// Inline styles for improved presentation
const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        background: 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)', // Gradient background
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        color: '#fff', // White text for better contrast
        fontSize: '24px',
        marginBottom: '15px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: '16px',
    },
    userInfo: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e9e9e9',
        borderRadius: '8px',
    },
};

export default SearchUser;
