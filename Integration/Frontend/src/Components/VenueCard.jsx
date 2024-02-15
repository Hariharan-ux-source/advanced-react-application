// VenueCard.js

//import React from 'react';
import PropTypes from 'prop-types';


const VenueCard = ({ name, image, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginLeft:'54px',margin: '55px', padding: '10px', maxWidth: '450px' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      
    </div>
  );
};

VenueCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired


};

export default VenueCard;
