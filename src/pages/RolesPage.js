// RolesPage.js
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import roleService from '../services/roleService';

function RolesPage() {
  const [roles, setRoles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRoles = async () => {
      const { data, totalPages } = await roleService.getRoles(currentPage);
      setRoles(data);
      setTotalPages(totalPages);
    };
    fetchRoles();
  }, [currentPage]);

  return (
    <div>
      <h1>Roles</h1>
      <Table data={roles} columns={["ID", "Role Name"]} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default RolesPage;