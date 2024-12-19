// UsersPage.js
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import userService from '../services/userService';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, totalPages } = await userService.getUsers(currentPage);
      setUsers(data);
      setTotalPages(totalPages);
    };
    fetchUsers();
  }, [currentPage]);

  return (
    <div>
      <h1>Users</h1>
      <Table data={users} columns={["ID", "Name", "Email"]} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default UsersPage;