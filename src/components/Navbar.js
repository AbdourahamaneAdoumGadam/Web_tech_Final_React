// Implementation Plan

// 1. Navbar Component:
// - Displays navigation links based on roles (Admin/User/Manager).
// - Supports logout functionality.

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';


function Navbar({ role }) {
  return (
    <nav className="navbar">
      
      {role === 'Admin' && <Link to="/users">Users</Link>}
      {role === 'Admin' && <Link to="/roles">Roles</Link>}
      
      
    </nav>
  );
}

export default Navbar;
