
// import {  useNavigate } from 'react-router-dom'
// import '../Style/Home.css'
//  import Navbar from './Navbar'
// // import Nvbar from './Navbar'
// // import SideBar from './SideBar'
// function Home() {
//   const navigate = useNavigate();

//   return (
//     <>

//         <Navbar/>
//         <div className='bodyimg'>

//         <div className='hom'>
       
//         <div className='theme1'>
//         <div className='txt1'><button onClick={()=> navigate('/wed')}>Wedding Anniversary</button></div>   
        
//         </div>
//         <div className='theme2'>
//         <div className='txt'><button onClick={()=> navigate('/birth')}>Birthday Party</button></div>    
        
//         </div>
//         <div className='theme3'>
//         <div className='txtcen'><button onClick={()=> navigate('/gend')}><center>Gender Reveal Party</center></button></div> 
           
//         </div>
//         <div className='theme4'>
//         <div className='txt'><button onClick={()=> navigate('/success')}>Success Meet</button></div>
            
//         </div>
//         </div>
//         <div className='desch'>
//           <div className='slog'>
            
          
          
//          <div className='txtt'>
//         At EventSphere, we specialize in transforming ordinary events into extraordinary memories. Our event organizing website is your one-stop destination for seamless, stress-free, and unforgettable experiences. Whether it s a corporate gathering, a milestone celebration, or a dreamy wedding, we bring creativity, precision, and passion to every occasion.
             
//         </div>
//         </div>
//         </div> 
//         </div>
       

        
//     </>
//   )
// }

// export default Home
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css';
import Navbar from './Navbar';
import insta from '../assets/insta.avif'
import mail from '../assets/mail.webp'
import face from '../assets/face.png'
import twitter from '../assets/twitter.png'

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='bodyimg'>
        <div className='hom'>
          <div className='theme1'>
            <div className='txt1'>
              <button onClick={() => navigate('/wed')}>Wedding Anniversary</button>
            </div>
          </div>
          <div className='theme2'>
            <div className='txt'>
              <button onClick={() => navigate('/birth')}>Birthday Party</button>
            </div>
          </div>
          <div className='theme3'>
            <div className='txtcen'>
              <button onClick={() => navigate('/gend')}>
                <center>Gender Reveal Party</center>
              </button>
            </div>
          </div>
          <div className='theme4'>
            <div className='txt'>
              <button onClick={() => navigate('/success')}>Success Meet</button>
            </div>
          </div>
        </div>
        <div className='desch'>
        </div>
        <div className='tex-container'>
          <p>
            Welcome to Rel-event – where every celebration becomes an unforgettable masterpiece. At Rel-event, we pride ourselves on being more than just event organizers; we are architects of experiences, crafting moments that linger in the hearts and minds of our clients. With a passion for perfection and an eye for detail, we specialize in transforming ordinary events into extraordinary memories.
          </p>
        </div>
        
         <footer className='text-center bg-body-tertiary'>
          {/* Left Section */}
          <div className='left-section'>
            <div className='slogan' style={{fontFamily:'monospace',marginLeft:'-565px',fontSize:'22px',marginTop:'1px'}}>
              <br>
              </br>
              <p>Relish your events with Rel-event</p>
              </div>
          </div>
          
          {/* Right Section with Icons */}
          <div className='right-section'>
            <a href='#'>
              <i className='fab fa-instagram'>
              <img src={insta} alt="Logo" style={{ width: '3%', height: '5%', objectFit: 'cover', borderRadius: '16px',marginLeft:'290px',marginTop:'-80px'}} />

              </i>
            </a>
            <a href='#'>
              <i className='fab fa-facebook-f'>
              <img src={face} alt="Logo" style={{ width: '3%', height: '5%', objectFit: 'cover', borderRadius: '16px',marginLeft:'50px',marginTop:'-80px' }} />

              </i>
            </a>
            <a href='#'>
              <i className='fab fa-twitter'>
              <img src={twitter} alt="Logo" style={{ width: '3%', height: '5%', objectFit: 'cover', borderRadius: '16px' ,marginLeft:'50px',marginTop:'-80px'}} />

              </i>
            </a>
            <a href='mailto:info@relevent.com'>
              <i className='fas fa-envelope'>
              <img src={mail} alt="Logo" style={{ width: '3%', height: '5%', objectFit: 'cover', borderRadius: '16px' ,marginLeft:'50px',marginTop:'-80px'}} />

              </i>
            </a>
          </div>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Rel-event. All Rights Reserved.
          </div>
        </footer>

        <></>
      </div>
    </>
  );
}

export default Home;
