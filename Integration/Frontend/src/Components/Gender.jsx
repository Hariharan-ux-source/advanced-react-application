import '../Style/gender.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Gender= () => {
  return (
    <>
    <Navbar/>
    <div className="gend-container">
      <div className="img1-container">
        <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-909895128a-1564410082.jpg" alt="Gender Reveal" />
      </div>
      <div className="description2-container">
        <h2>Gender Reveal Party</h2>
        <p>
        Eventsphere event management website offers an exciting Gender Reveal Party Package, designed to add a touch of magic to the special moment of discovering the baby s gender.
        </p>
        {/* Add more descriptions as needed */}
      </div>
      <button className="book-now-button1">
      <Link to="/appy" className="nav-link" aria-current="page" style={{ fontSize: '25px' ,fontStyle:'italic'}}>
    Book Now
  </Link>
            </button>
    </div>
    </>
  );
};

export default Gender;