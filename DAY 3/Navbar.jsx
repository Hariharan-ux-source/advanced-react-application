import { Link } from 'react-router-dom';
import sphere from '../assets/sphere.png';


function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <img src={sphere} alt="Logo" style={{ width: '7%', height: '30%', objectFit: 'cover', borderRadius: '16px' }} />

          <a className="navbar-brand" href="#"></a>
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#" style={{ fontSize: '25px' }}><Link to='/main'>Home
              </Link> 
                </a>
              <a className="nav-link" href="#" style={{ fontSize: '25px' }}>Themes</a>
              <a className="nav-link" href="#" style={{ fontSize: '25px' }}>About Us</a>
              <a className="nav-link" href="#" style={{ fontSize: '25px' }}>
                <Link to='/login'> 
                  Logout
                   </Link>
                  </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
