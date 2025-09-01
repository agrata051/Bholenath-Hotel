import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    // If no user data, redirect to login (not logged in)
    navigate('/login');
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p className="mb-6 text-gray-700">You are now logged in with email: <strong>{user.email}</strong></p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
