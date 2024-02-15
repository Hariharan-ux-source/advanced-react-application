//import React from 'react';
import Slider from '../Components/imgslider.jsx';

const images = ['https://blog.headbox.com/wp-content/uploads/2018/09/detail_twobytwo_NHM_080917-3.jpg', 'https://www.metropolbanquet.com/wp-content/uploads/metropol-banquet-hall-modern-ballroom.jpg', 'https://www.wedaways.com/wp-content/uploads/2019/11/1-199.jpg']; // Add more image URLs as needed

const App1 = () => {
  return (
    <div>
      <Slider images={images} />
    </div>
  );
};

export default App1;
