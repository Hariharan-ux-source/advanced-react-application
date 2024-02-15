

//import React from 'react';

import '../Style/Birth.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Birth= () => {
  return (
    <>
    <Navbar/>
    <div className="birthday-party-container">
      <div className="image-container1">
        <img src="https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg" alt="Birthday Party" />
      </div>
      <div className="description-container">
        <h2>Birthday Party Celebration</h2>
        <p>
        Celebrate your special day with EventSphere s exclusive Birthday Package, designed to turn your dreams into unforgettable moments. Immerse yourself in a world of joy, laughter, and seamless celebration as our expert team takes care of every detail.
        </p>
        {/* Add more descriptions as needed */}
      </div>
      <div className="birthlink">
      <button className="book-now-button"><Link to="/appy" className="nav-link" aria-current="page" style={{ fontSize: '25px' ,fontStyle:'italic'}}>
    Book Now
  </Link></button>
      </div>

    </div>
    </>
  );
};

export default Birth;
