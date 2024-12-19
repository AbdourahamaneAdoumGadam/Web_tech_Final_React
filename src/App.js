import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import TaskPage from './pages/TaskPage';
import AddTaskPage from './pages/AddTask'; // Ensure this import is correct
import ManagerPage from './pages/ManagerPage';
import RequestResetPassword from './pages/RequestResetPassword';
import ResetPassword from './pages/ResetPassword';
import Reset from './pages/Reset';
import ListUsers from './pages/ListUsers';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import SearchUser from './pages/SearchUser';
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/request-reset" element={<RequestResetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/search-user" element={<SearchUser />} />
          <Route path="/taskspage" element={<TaskPage />} />
          <Route path="/addtask" element={<AddTaskPage />} /> {/* Ensure this route is added */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
