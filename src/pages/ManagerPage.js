import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManagerPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user list from the backend API
        axios
            .get('http://localhost:8080/api/users/getall') // Replace with your backend API URL
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setUsers(response.data);  // Set the response data to users state
                } else {
                    setError('Unexpected response format.');
                }
                setLoading(false);  // Set loading state to false
            })
            .catch((error) => {
                setError('Failed to fetch users');
                setLoading(false);
            });
    }, []);

    const handleLogout = () => {
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Navigate to login page
        navigate('/login');
    };

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Manager Page</h1>
            <p style={styles.subHeader}>Manage users and tasks here.</p>

            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>

            <h2 style={styles.userListHeader}>User List</h2>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button style={styles.button}>Edit</button>
                                <button style={styles.button}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No users found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        background: 'linear-gradient(45deg, #90638c, #ebdfe9, #d5c0d1, #bea1bd, #a583a4, #92638f)', // Gradient background
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: '30px',
    },
    header: {
        textAlign: 'center',
        color: '#fff', // White text for better contrast
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    subHeader: {
        textAlign: 'center',
        color: '#fff', // White text for better contrast
        fontSize: '18px',
        marginBottom: '25px',
    },
    userListHeader: {
        fontSize: '24px',
        marginBottom: '15px',
        color: '#fff', // White text for better contrast
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    tableHeader: {
        backgroundColor: '#90638c',
        color: 'white',
        padding: '10px',
        textAlign: 'left',
    },
    tableRow: {
        borderBottom: '1px solid #ddd',
        padding: '10px',
    },
    button: {
        padding: '6px 12px',
        backgroundColor: '#a583a4',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginRight: '8px',
        cursor: 'pointer',
    },
    logoutButton: {
        backgroundColor: '#90638c', // Custom color for logout button
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginBottom: '20px',
        width: '10%', // Button width adjustment
        fontSize: '16px',
        position: 'absolute', // Position absolute to place it left
        left: '20px', // Positioning it 20px from the left
        top: '40px', // Add top margin for spacing from the top
    }
};

export default ManagerPage;
