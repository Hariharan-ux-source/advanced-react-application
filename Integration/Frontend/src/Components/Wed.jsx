

//import React from 'react';

import '../Style/Wed.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Birth= () => {
  return (
    <>
    <Navbar/>
    <div className="wedani-container">
      <div className="img-container">
        <img src="https://wallpaperaccess.com/full/4055163.jpg" width={"1000"} />
      </div>
      <div className="description1-container">
        <h2>Wedding Anniversary</h2>
        <p>
        Celebrate the journey of love with EventSpheres exclusive Wedding Anniversary Package. Our carefully curated package is designed to turn your special day into a timeless and unforgettable celebration.
        Whats Included:


Venue Elegance,

Gourmet Delights,

Personalized Decor,

Entertainment Extravaganza,

Photography and Videography

Additional Touches:

Champagne Toast

Anniversary Cake
        </p>
        {/* Add more descriptions as needed */}
      </div>
      <button className="book-now-button"><Link to="/appy" className="nav-link" aria-current="page" style={{ fontSize: '25px' ,fontStyle:'italic'}}>
    Book Now
  </Link></button>
    </div>
    </>
  );
};

export default Birth;
