

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
        <img src="https://www.hdwallpapers.in/download/newly_married_couple-HD.jpg" width={"1000"} />
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
      <button className="book-now-button"><Link to='/appy'>Book Now</Link></button>
    </div>
    </>
  );
};

export default Birth;
