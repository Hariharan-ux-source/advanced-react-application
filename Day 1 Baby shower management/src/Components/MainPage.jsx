// src/MainPage.js
//import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../Style/Mainpage.css';

const MainPage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/themes">Themes</Link></li>
          <li><Link to="/add-ons">Add-ons</Link></li>
        </ul>
      </nav>

      <div className="content">
        {/* Your main content goes here */}
        <h1>Welcome to the Main Page</h1>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default MainPage;
