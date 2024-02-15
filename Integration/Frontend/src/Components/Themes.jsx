//import React from 'react';
// import '../Style/EventThemes.css'; 
// import Navbar from './Navbar';

// function EventThemes() {
//   return (
//     <>
//     <Navbar/>
//     <div id="event-themes-container">
//       <div className="theme">
//         <img src="https://i.pinimg.com/736x/45/4e/2c/454e2c220ed5bc5268b022f944e5bcc5.jpg" alt="Theme 1" />
//         <p>A balloon-themed party is a festive and visually stunning event that revolves around the creative and playful use of balloons as a central element of decoration. From balloon arches and bouquets to balloon installations and sculptures, this theme offers a vibrant and lively atmosphere that is perfect for various celebrations.
//         </p>
//       </div>
//       <div className="theme">
//         <img src="https://m.media-amazon.com/images/I/81QqzSUet8L.jpg" alt="Theme 2" />
//         <p>A gold-themed party is a luxurious and sophisticated event that revolves around the opulence and elegance associated with the color gold. Whether it's a wedding, a milestone celebration, or a corporate gala, a gold-themed party exudes glamour and creates a visually stunning atmosphere.
//         </p>
//       </div>
//       <div className="theme">
//         <img src="https://ecbyw6e7w7s.exactdn.com/wp-content/uploads/2013/09/Winter-Wonderland-Theme-46-scaled.jpg?strip=all&lossy=1&ssl=1" alt="Theme 3" />
//         <p>A Winter-themed party provides a magical and cozy atmosphere, celebrating the beauty and charm of the winter season. Whether you're planning a holiday gathering, a New Year's Eve bash, or a general winter celebration
//         </p>
//       </div>
//       <div className="theme">
//         <img src="https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2022/01/13053008/LenaLimPhotography-Alice1stBirthday-43.jpg" alt="Theme 4" />
//         <p>A flower-themed party, often referred to as a floral or garden party, is a delightful and visually enchanting event that revolves around the beauty and vibrancy of flowers. 
//         </p>
//       </div>
//     </div>
//     </>
//   );
// }

// export default EventThemes;
//import React from 'react';
import '../Style/EventThemes.css'; // Import the CSS file
import Navbar from './Navbar';

function EventThemes() {
  return (
    <>
    <Navbar/>
    <div id="event-themes-container">
      <div className="them1">
        <img className="theme-image" src="https://i.pinimg.com/736x/45/4e/2c/454e2c220ed5bc5268b022f944e5bcc5.jpg" alt="Theme 1" />
        <h1>Ballon Theme</h1>
      </div>
      <div className="them2">
        <img className="theme-image" src="https://m.media-amazon.com/images/I/81QqzSUet8L.jpg" alt="Theme 2" />
        <h1>Gold Theme</h1>
      </div>
      <div className="them3">
        <img className="theme-image" src="https://ecbyw6e7w7s.exactdn.com/wp-content/uploads/2013/09/Winter-Wonderland-Theme-46-scaled.jpg?strip=all&lossy=1&ssl=1" alt="Theme 3" />
        <h1>Winter Theme</h1>
      </div>
      <div className="them3">
        <img className="theme-image" src="https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2022/01/13053008/LenaLimPhotography-Alice1stBirthday-43.jpg" alt="Theme 4" />
        <h1>Flower Theme</h1>
      </div>
    </div>
    </>
  );
}

export default EventThemes;


