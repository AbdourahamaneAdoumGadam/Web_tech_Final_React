import React, { useState } from 'react';
import UserList from '../pages/ListUsers'; // Adjust the path based on your project structure

const UserPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const [usersPerPage] = useState(10); // Number of users per page

    // Sample data - In a real application, you would fetch this from an API or database
    const totalUsers = 50; // Replace this with the actual number of users from your data source

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Calculate the users to be displayed on the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = Array.from({ length: usersPerPage }, (_, index) => ({
        id: index + indexOfFirstUser + 1,
        name: `User ${index + indexOfFirstUser + 1}`, // Example name
        role: `Role ${index + indexOfFirstUser + 1}`, // Example role
    })).filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Pagination logic
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <input
                type="text"
                placeholder="Search by name, ID, or role"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <UserList users={currentUsers} searchQuery={searchQuery} />

            {/* Pagination Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{
                        padding: '8px 12px',
                        margin: '0 5px',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        backgroundColor: currentPage === 1 ? '#ccc' : '#4A154B',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Previous
                </button>

                {/* Page number buttons */}
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        style={{
                            padding: '8px 12px',
                            margin: '0 5px',
                            cursor: 'pointer',
                            backgroundColor: currentPage === index + 1 ? '#7D4E57' : '#4A154B',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{
                        padding: '8px 12px',
                        margin: '0 5px',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        backgroundColor: currentPage === totalPages ? '#ccc' : '#4A154B',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserPage;
