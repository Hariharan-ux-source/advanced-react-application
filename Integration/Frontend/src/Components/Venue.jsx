// VenuePage.js

//import React from 'react';
import Navbar from './Navbar';
import VenueCard from './VenueCard';
import App1 from './App1';



const venues = [
  {
    id: 1,
    name: 'Royal Pavilion',
    image: 'https://lirp-cdn.multiscreensite.com/6b33b2ec/dms3rep/multi/opt/IMG_2178-1920w.JPG',
    description: '',
  },
  {
    id: 2,
    name: 'Enchanted Elegance Hall',
    image: 'http://3.bp.blogspot.com/-jN5zIVGC-j8/T01eqaaiqVI/AAAAAAAAAGg/gLtUljcJhOg/s1600/latinoballroom1.jpg',
    description: '',
  },
  {
    id: 3,
    name: 'Regal Heights Banquet Hall',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/df/52/3e/df523e10a1da037b2ec4855f15acbd7d.jpg',
    description: '',
  }
  // Add more venue objects as needed
];

const Venue = () => {
  return (
    <div>
      <Navbar/>
      <App1/>
     
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {venues.map((venue) => (
          <VenueCard key={venue.id} {...venue} />
        ))}
      </div>
    </div>
  );
};

export default Venue;
