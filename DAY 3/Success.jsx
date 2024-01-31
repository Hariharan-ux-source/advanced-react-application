import '../Style/success.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Success= () => {
  return (
    <>
    <Navbar/>
    <div className="success-container">
      <div className="img3-container">
        <img src="C:\Users\harih\Desktop\advanced app dev\baby_bliss\src\assets\success.jpg" />
      </div>
      <div className="description4-container">
        <h2>Success meet</h2>
        <p>
        
        </p>
        {/* Add more descriptions as needed */}
      </div>
      <button className="book-now-button"><Link to='/appy'>Book Now</Link></button>
    </div>
    </>
  );
};

export default Success;
