// Home.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect back to Login page on Logout
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
