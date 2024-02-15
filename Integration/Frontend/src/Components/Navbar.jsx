import { Link } from 'react-router-dom';
import event from '../assets/event.png';



function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <img src={event} alt="Logo" style={{ width: '7%', height: '30%', objectFit: 'cover', borderRadius: '16px' }} />

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
            {/* <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#" style={{ fontSize: '25px' }}>
<Link to='/main'>
                Home
                 </Link> 
                </a>
              <a className="nav-link" href="/theme" style={{ fontSize: '25px' }}>
                <Link to='/theme'> 
                  Themes
                   </Link>
                  </a>
              <br></br>
              <a className="nav-link" href="#" style={{ fontSize: '25px' }}>About Us</a><br></br>
              <a className="nav-link" href="#" style={{ fontSize: '25px' }}>
                <Link to='/login'> 
                  Logout
                   </Link>
                  </a>
            </div> */}
            <div className="navbar-nav">
  <Link to="/main" className="nav-link" aria-current="page" style={{ fontSize: '25px' ,fontStyle:'italic'}}>
    Home
  </Link>
  <Link to="/theme" className="nav-link" style={{ fontSize: '25px',fontStyle:'italic' }}>
    Themes
  </Link>
  <Link to="/venue" className="nav-link" style={{ fontSize: '25px',fontStyle:'italic' }}>
    Venues
  </Link>
  <br />
  <Link to="/about" className="nav-link" style={{ fontSize: '25px',fontStyle:'italic' }}>
    About us
  </Link>
  
  <br />
  <Link to="/login" className="nav-link" style={{ fontSize: '25px',fontStyle:'italic' }}>
    Logout
  </Link>
  
</div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
